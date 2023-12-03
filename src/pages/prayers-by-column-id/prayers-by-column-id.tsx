import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import styled from 'styled-components/native';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { SecondaryHeader } from '@widgets/layouts/secondary-header';

import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions, selectors } from '@shared/store/ducks/prayers';
import { UIPrayersList } from '@shared/ui/components/prayers-list';

export const PrayersByColumnIdPage = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, RootRouteNames.PRAYERS_BY_COLUMN_ID>>();
  const { columnId, columnTitle } = route.params;
  const prayersByColumnId = useAppSelector((state) =>
    selectors.selectPrayersByColumnId(columnId, state),
  );

  useEffect(() => {
    dispatch(actions.fetchPrayersByColumnId(columnId));
  }, [columnId, dispatch]);

  return (
    <StyledContainer>
      <SecondaryHeader title={columnTitle} />
      <StyledContentContainer>
        <UIPrayersList data={prayersByColumnId} />
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
