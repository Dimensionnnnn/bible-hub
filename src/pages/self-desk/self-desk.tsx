import { useEffect } from 'react';
import styled from 'styled-components/native';

import { ModalTrigerButton } from '@widgets/buttons/modal-triger-button';
import { PrimaryHeader } from '@widgets/layouts/primary-header';

import { SelfColumnsEntity } from '@entities/columns-list/self-columns';
import { CreateItemModalEntity } from '@entities/modal/create-item-modal';

import { useToggle } from '@shared/helpers/hooks/use-toggle';
import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions as authActions } from '@shared/store/ducks/auth';
import { actions as columnsActions } from '@shared/store/ducks/desk-columns';
import {
  actions as selfDesksActions,
  selectors as selfDesksSelectors,
} from '@shared/store/ducks/self-desks';

export const SelfDeskPage = () => {
  const dispatch = useAppDispatch();
  const selfDesks = useAppSelector(selfDesksSelectors.selectSelfDesks);
  const deskId = selfDesks.id;
  const { onCloseToggle, onOpenToggle, isOpened } = useToggle(false);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const handleCreateColumn = (title: string) => {
    dispatch(columnsActions.fetchCreateColumn({ deskId, title }));
  };

  useEffect(() => {
    dispatch(selfDesksActions.fetchSelfDesks());
  }, [dispatch]);

  return (
    <StyledContainer>
      <PrimaryHeader title="My desk" onLogout={handleLogout} />
      <StyledContentContainer>
        <SelfColumnsEntity deskId={deskId} />
        <ModalTrigerButton onOpenToggle={onOpenToggle} />
      </StyledContentContainer>
      <CreateItemModalEntity
        isOpened={isOpened}
        title="New column"
        placeholder="Enter title of column"
        onClose={onCloseToggle}
        dispatchAction={handleCreateColumn}
      />
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
