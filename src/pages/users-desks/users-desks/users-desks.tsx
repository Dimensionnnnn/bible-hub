import {useAppDispatch, useAppSelector} from '@shared/store/ducks/hooks/hooks';
import {
  getUsersAfterCursor,
  getUsersDesks,
} from '@shared/store/ducks/selectors/desks-selectors';
import {logout} from '@shared/store/ducks/slices/auth-slice';
import {fetchUsersDesks} from '@shared/store/ducks/slices/users-desks-slice';
import {UIDesksList} from '@shared/ui/desks-list';
import {PrimaryHeader} from '@shared/ui/primary-header';
import {useEffect} from 'react';
import styled from 'styled-components/native';

export const UsersDeskPage = () => {
  const dispatch = useAppDispatch();
  const afterCursor = useAppSelector(getUsersAfterCursor);
  const usersDesks = useAppSelector(getUsersDesks);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleNavigate = (id: number) => {
    console.log(id);
  };

  const handleUsersDesks = (cursor?: string) => {
    if (cursor !== null) {
      dispatch(fetchUsersDesks(cursor || ''));
    }
  };

  useEffect(() => {
    if (usersDesks?.length === 0) {
      handleUsersDesks();
    }
  });

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
  background-color: ${props => props.theme.colors.grayscale_200};
  position: relative;
`;

const StyledContentContainer = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 16px 0 14px;
`;
