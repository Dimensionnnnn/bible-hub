import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import styled from 'styled-components/native';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { SecondaryHeader } from '@widgets/layouts/secondary-header';

import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions, selectors } from '@shared/store/ducks/desk-columns';
import { UIDeskColumnsList } from '@shared/ui/components/desk-columns-list';

export const DeskColumnsPage = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, RootRouteNames.DESK_COLUMNS>>();
  const { deskId, deskTitle } = route.params;
  const deskColumns = useAppSelector((state) => selectors.selectDeskColumns(state, deskId));
  const afterCursor = useAppSelector(selectors.selectAfterCursor);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigate = (id: number, title: string) => {
    navigation.navigate(RootRouteNames.PRAYERS_BY_COLUMN_ID, { columnId: id, columnTitle: title });
  };

  const handleMoreDeskColumns = useCallback(
    (cursor?: string) => {
      if (cursor) {
        dispatch(actions.fetchMoreDeskColumns({ deskId, afterCursor: cursor }));
      }
    },
    [deskId, dispatch],
  );

  useEffect(() => {
    dispatch(actions.fetchDeskColumns(deskId));
  }, [deskId, dispatch]);

  return (
    <StyledContainer>
      <SecondaryHeader title={deskTitle} />
      <StyledContentContainer>
        <UIDeskColumnsList
          data={deskColumns}
          onPress={handleNavigate}
          fetchMore={() => handleMoreDeskColumns(afterCursor)}
        />
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.grayscale_200};
  position: relative;
`;

const StyledContentContainer = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 16px 0 14px;
`;
