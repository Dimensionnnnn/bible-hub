import styled from 'styled-components/native';

import { PrimaryHeader } from '@widgets/layouts/primary-header';

import { FollowedPrayersListEntity } from '@entities/prayers-list/followed-prayers';

import { useAppDispatch } from '@shared/store';
import { actions as authActions } from '@shared/store/ducks/auth';

export const FollowedPage = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <StyledContainer>
      <PrimaryHeader title="Followed" onLogout={handleLogout} />
      <StyledContentContainer>
        <FollowedPrayersListEntity />
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
