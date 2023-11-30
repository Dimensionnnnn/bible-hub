import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import styled from 'styled-components/native';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { LayoutModal, ModalType } from '@widgets/layouts/modal';
import { ModalPlaceholders } from '@widgets/layouts/modal/modal';
import { PrimaryHeader } from '@widgets/layouts/primary-header';

import { ModalForm } from '@shared/form-components/modal-form';
import { useToggle } from '@shared/helpers/hooks/use-toggle';
import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions as authActions } from '@shared/store/ducks/auth';
import { actions, selectors as columnsSelectors } from '@shared/store/ducks/desk-columns';
import {
  actions as selfDesksActions,
  selectors as selfDesksSelectors,
} from '@shared/store/ducks/self-desks';
import {
  ButtonIconWithSize,
  ButtonSize,
} from '@shared/ui/components/buttons/button-icon-with-size/button-icon-with-size';
import { UIDeskColumnsList } from '@shared/ui/components/desk-columns-list';
import { SvgPlusIcon } from '@shared/ui/icons/components/svg-plus-icon';

export const SelfDeskPage = () => {
  const dispatch = useAppDispatch();
  const selfDesks = useAppSelector(selfDesksSelectors.selectSelfDesks);
  const deskId = selfDesks?.id;
  const afterCursor = useAppSelector(columnsSelectors.selectAfterCursor);
  const { onCloseToggle, onOpenToggle, isOpened } = useToggle(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const selfColumns = useAppSelector((state) => {
    if (deskId) {
      return columnsSelectors.selectDeskColumns(state, deskId);
    }
  });

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const handleNavigate = (id: number, title: string) => {
    navigation.navigate(RootRouteNames.PRAYERS_BY_COLUMN_ID, { columnId: id, columnTitle: title });
  };

  const handleMoreDeskColumns = useCallback(
    (cursor?: string) => {
      if (deskId) {
        dispatch(actions.fetchMoreDeskColumns({ deskId, afterCursor: cursor }));
      }
    },
    [deskId, dispatch],
  );

  useEffect(() => {
    dispatch(selfDesksActions.fetchSelfDesks());
  }, [dispatch]);

  useEffect(() => {
    if (deskId) {
      dispatch(actions.fetchDeskColumns(deskId));
    }
  }, [deskId, dispatch]);

  return (
    <StyledContainer>
      <PrimaryHeader title="My desk" onLogout={handleLogout} />
      <StyledContentContainer>
        <UIDeskColumnsList
          data={selfColumns}
          onPress={handleNavigate}
          fetchMore={() => {
            handleMoreDeskColumns(afterCursor);
          }}
        />
        <StyledButtonContainer>
          <ButtonIconWithSize size={ButtonSize.large} Icon={SvgPlusIcon} onPress={onOpenToggle} />
        </StyledButtonContainer>
      </StyledContentContainer>
      <LayoutModal modalVisible={isOpened} closeModal={onCloseToggle} type={ModalType.COLUMN}>
        <ModalForm placeholder={ModalPlaceholders[ModalType.COLUMN]} />
      </LayoutModal>
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

const StyledButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  right: 16px;
  align-items: flex-end;
`;
