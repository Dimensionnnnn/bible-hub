import { GuestStackParamList } from '@app/navigation/navigators/guest/guest';
import { schema } from '@features/auth/sign-in/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormInput } from '@shared/form-components/inputs/form-input';
import { useAppDispatch } from '@shared/store';
import { actions } from '@shared/store/ducks/auth';
import { ButtonSize, PrimaryButton } from '@shared/ui/components/buttons/primary-button/primary-button';
import { TextButton } from '@shared/ui/components/buttons/text-button/text-button';
import { Controller, useForm } from 'react-hook-form';
import styled, { css } from 'styled-components/native';

const backgroundImageUrl = require('@shared/ui/assets/images/background-gradient.png');

interface SubmitProps {
  email: string;
  password: string;
}

interface SignInScreenProps {
  navigation: StackNavigationProp<GuestStackParamList, 'SignIn'>;
}

export const SignInPage = ({ navigation }: SignInScreenProps) => {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dispatch = useAppDispatch();

  const { isValid } = formState;

  const onSubmit = (dataSubmit: SubmitProps) => {
    dispatch(actions.signIn(dataSubmit));
  };

  const handleSignUpNavigate = () => {
    navigation.navigate('SignUp');
  };

  return (
    <StyledContainer>
      <StyledImage source={backgroundImageUrl} resizeMode="cover" />
      <StyledWrapper>
        <StyledTitle>Log in</StyledTitle>
        <ControllersContainer>
          <Controller
            control={control}
            name="email"
            render={(renderProps) => <FormInput label="Email" {...renderProps} />}
          />
          <Controller
            control={control}
            name="password"
            render={(renderProps) => <FormInput label="Password" isPassword {...renderProps} />}
          />
        </ControllersContainer>
        <FooterContainer>
          <PrimaryButton
            title="Confirm"
            size={ButtonSize.large}
            isDisabled={!isValid}
            onPress={handleSubmit(onSubmit)}
          />
          <FooterWrapper>
            <FooterText>Don’t have an account?</FooterText>
            <TextButton title="Sign up" onPress={handleSignUpNavigate} />
          </FooterWrapper>
        </FooterContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: flex-end;
`;

const StyledWrapper = styled.View`
  padding: 36px 24px 40px 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${(props) => props.theme.colors.grayscale_100};
`;

const ControllersContainer = styled.View`
  gap: 28px;
  padding-bottom: 42px;
`;

const FooterContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const FooterWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const StyledTitle = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.titleBold_28};
      color: ${props.theme.colors.grayscale_800};
      padding-bottom: 28px;
    `;
  }};
`;

const FooterText = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.bodyRegular_16};
      color: ${props.theme.colors.grayscale_700};
    `;
  }};
`;

const StyledImage = styled.Image`
  width: 100%;
  position: absolute;
  top: 0;
`;
