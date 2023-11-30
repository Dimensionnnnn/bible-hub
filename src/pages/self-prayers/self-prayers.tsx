import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import styled from 'styled-components/native';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { LayoutModal } from '@widgets/layouts/modal';
import { ModalPlaceholders, ModalType } from '@widgets/layouts/modal/modal';
import { SecondaryHeader } from '@widgets/layouts/secondary-header';

import { ModalForm } from '@shared/form-components/modal-form';
import { useToggle } from '@shared/helpers/hooks/use-toggle';
import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions, selectors } from '@shared/store/ducks/prayers';
import {
  ButtonIconWithSize,
  ButtonSize,
} from '@shared/ui/components/buttons/button-icon-with-size/button-icon-with-size';
import { UISelfPrayersList } from '@shared/ui/components/self-prayers-list';
import { SvgPlusIcon } from '@shared/ui/icons/components/svg-plus-icon';

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
    console.log(id, title);
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
        <StyledButtonContainer>
          <ButtonIconWithSize size={ButtonSize.large} Icon={SvgPlusIcon} onPress={onOpenToggle} />
        </StyledButtonContainer>
      </StyledContentContainer>
      <LayoutModal modalVisible={isOpened} closeModal={onCloseToggle} type={ModalType.PRAYER}>
        <ModalForm
          placeholder={ModalPlaceholders[ModalType.PRAYER]}
          onCloseModal={onCloseToggle}
          dispatchAction={(title: string) => {
            dispatch(actions.fetchCreatePrayer({ columnId, title }));
          }}
        />
      </LayoutModal>
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

const StyledButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 46px;
  right: 16px;
  align-items: flex-end;
`;
