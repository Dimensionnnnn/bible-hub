import { useEffect } from 'react';
import styled from 'styled-components/native';

import { PrimaryHeader } from '@widgets/layouts/primary-header';

import { useAppDispatch, useAppSelector } from '@shared/store';
import { actions as authActions } from '@shared/store/ducks/auth';
import { selectors, actions as selfDesksActions } from '@shared/store/ducks/self-desks';
import {
  ButtonIconWithSize,
  ButtonSize,
} from '@shared/ui/components/buttons/button-icon-with-size/button-icon-with-size';
import { UIDesksList } from '@shared/ui/components/desks-list';
import { SvgPlusIcon } from '@shared/ui/icons/components/svg-plus-icon';

export const SelfDeskPage = () => {
  const dispatch = useAppDispatch();
  const selfDesks = useAppSelector(selectors.selectSelfDesks);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  const handleNavigate = () => {};

  useEffect(() => {
    dispatch(selfDesksActions.fetchSelfDesks());
  }, [dispatch]);

  return (
    <StyledContainer>
      <PrimaryHeader title="My desk" onLogout={handleLogout} />
      <StyledContentContainer>
        <UIDesksList data={selfDesks} onPress={handleNavigate} />
        <StyledButtonContainer>
          <ButtonIconWithSize size={ButtonSize.large} Icon={SvgPlusIcon} onPress={() => {}} />
        </StyledButtonContainer>
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

const StyledButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  right: 16px;
  align-items: flex-end;
`;
