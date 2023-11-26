import {useAppDispatch, useAppSelector} from '@shared/store/ducks/hooks/hooks';
import {getSelfDesks} from '@shared/store/ducks/selectors/desks-selectors';
import {logout} from '@shared/store/ducks/slices/auth-slice';
import {fetchSelfDesks} from '@shared/store/ducks/slices/self-desks-slice';
import {
  ButtonIconWithSize,
  ButtonSize,
} from '@shared/ui/buttons/button-icon-with-size/button-icon-with-size';
import {UIDesksList} from '@shared/ui/desks-list';
import {SvgPlusIcon} from '@shared/ui/icons/components/svg-plus-icon';
import {PrimaryHeader} from '@shared/ui/primary-header';
import {useEffect} from 'react';
import styled from 'styled-components/native';

export const SelfDeskPage = () => {
  const dispatch = useAppDispatch();
  const selfDesks = useAppSelector(getSelfDesks);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleNavigate = (id: number) => {
    console.log(id);
  };

  useEffect(() => {
    if (selfDesks?.length === 0) {
      dispatch(fetchSelfDesks());
    }
  });

  return (
    <StyledContainer>
      <PrimaryHeader title="My desk" onLogout={handleLogout} />
      <StyledContentContainer>
        <UIDesksList data={selfDesks} onPress={handleNavigate} />
        <StyledButtonContainer>
          <ButtonIconWithSize
            size={ButtonSize.large}
            Icon={SvgPlusIcon}
            onPress={() => console.log('Pressed')}
          />
        </StyledButtonContainer>
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

const StyledButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  right: 16px;
  align-items: flex-end;
`;
