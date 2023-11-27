import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions as authActions } from '@shared/store/ducks/auth';
import { actions as usersDesksActions, selectors } from '@shared/store/ducks/users-desks';
import { UIDesksList } from '@shared/ui/components/desks-list';
import { PrimaryHeader } from '@widgets/layouts/primary-header';
import { useCallback, useEffect } from 'react';
import styled from 'styled-components/native';

export const UsersDeskPage = () => {
  const dispatch = useAppDispatch();
  const afterCursor = useAppSelector(selectors.selectAfterCursor);
  const usersDesks = useAppSelector(selectors.selectUsersDesks);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const handleNavigate = () => {};

  const handleUsersDesks = useCallback(
    (cursor?: string) => {
      if (cursor !== null) {
        dispatch(usersDesksActions.fetchUsersDesks({ afterCursor: cursor }));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (usersDesks?.length === 0) {
      handleUsersDesks();
    }
  }, [handleUsersDesks, usersDesks]);

  return (
    <StyledContainer>
      <PrimaryHeader title="Users desks" onLogout={handleLogout} />
      <StyledContentContainer>
        <UIDesksList
          data={usersDesks}
          onPress={handleNavigate}
          fetchMore={() => handleUsersDesks(afterCursor)}
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
