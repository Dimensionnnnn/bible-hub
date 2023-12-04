import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import styled from 'styled-components/native';

import {
  RootRouteNames,
  RootStackParamList,
} from '@app/navigation/navigators/tab-navigator/tab-navigator';

import { ModalTrigerButton } from '@widgets/buttons/modal-triger-button';
import { SecondaryHeader } from '@widgets/layouts/secondary-header';

import { CreateItemModalEntity } from '@entities/modal/create-item-modal';

import { useToggle } from '@shared/helpers/hooks/use-toggle';
import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions, selectors } from '@shared/store/ducks/prayers';
import { UISelfPrayersList } from '@shared/ui/components/self-prayers-list';

export const SelfPrayersPage = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<RootStackParamList, RootRouteNames.PRAYERS_BY_COLUMN_ID>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { columnId, columnTitle } = route.params;
  const { onCloseToggle, onOpenToggle, isOpened } = useToggle(false);
  const prayersByColumnId = useAppSelector((state) =>
    selectors.selectPrayersByColumnId(state, columnId),
  );

  const handleNavigate = (id: number, title: string) => {
    navigation.navigate(RootRouteNames.PRAYER, { prayerId: id, prayerTitle: title });
  };

  const handleDelete = (columnId: number, prayerId: number) => {
    dispatch(actions.fetchDeletePrayer({ columnId, prayerId }));
  };

  useEffect(() => {
    dispatch(actions.fetchPrayersByColumnId(columnId));
  }, [dispatch, columnId]);

  return (
    <StyledContainer>
      <SecondaryHeader title={columnTitle} />
      <StyledContentContainer>
        <UISelfPrayersList
          data={prayersByColumnId}
          onPress={handleNavigate}
          onDeleteAction={handleDelete}
        />
        <ModalTrigerButton onOpenToggle={onOpenToggle} />
      </StyledContentContainer>
      <CreateItemModalEntity
        isOpened={isOpened}
        title="New prayer"
        placeholder="Enter title of prayer"
        onClose={onCloseToggle}
        dispatchAction={(title: string) => {
          dispatch(actions.fetchCreatePrayer({ columnId, title }));
        }}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: #fcfcfc;
  position: relative;
`;

const StyledContentContainer = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 16px 0 14px;
`;
