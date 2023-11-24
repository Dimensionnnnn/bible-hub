import {Desks} from '@api/generated';
import {getMyDesks} from '@features/auth/desks/get-my-desks';
import {useAppDispatch} from '@shared/store/ducks/hooks/hooks';
import {logout} from '@shared/store/ducks/slices/auth-slice';
import {
  ButtonIconWithSize,
  ButtonSize,
} from '@shared/ui/buttons/button-icon-with-size/button-icon-with-size';
import {UIDesksList} from '@shared/ui/desks-list';
import {SvgPlusIcon} from '@shared/ui/icons/components/svg-plus-icon';
import {PrimaryHeader} from '@shared/ui/primary-header';
import {useEffect, useState} from 'react';
import styled from 'styled-components/native';

export const SelfDeskPage = () => {
  const [desks, setDesks] = useState<Desks[]>([]);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleNavigate = (id: number) => {
    console.log(id);
  };

  useEffect(() => {
    const handleSetDesks = async () => {
      const response: any = await dispatch(getMyDesks());
      setDesks(response.payload.data);
    };

    handleSetDesks();
  }, [dispatch]);

  return (
    <StyledContainer>
      <PrimaryHeader title="My desk" onLogout={handleLogout} />
      <StyledContentContainer>
        <UIDesksList data={desks} onPress={handleNavigate} />
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
