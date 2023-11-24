import {useUsersDesksData} from '@features/auth/desks/hooks/use-desks-data';
import {useAppDispatch} from '@shared/store/ducks/hooks/hooks';
import {logout} from '@shared/store/ducks/slices/auth-slice';
import {UIDesksList} from '@shared/ui/desks-list';
import {PrimaryHeader} from '@shared/ui/primary-header';
import styled from 'styled-components/native';

export const UsersDeskPage = () => {
  const dispatch = useAppDispatch();
  const {isLoading, usersDesks, fetchMore} = useUsersDesksData();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleNavigate = (id: number) => {
    console.log(id);
  };

  return (
    <StyledContainer>
      <PrimaryHeader title="Users desks" onLogout={handleLogout} />
      <StyledContentContainer>
        <UIDesksList
          data={usersDesks}
          onPress={handleNavigate}
          fetchMore={fetchMore}
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
