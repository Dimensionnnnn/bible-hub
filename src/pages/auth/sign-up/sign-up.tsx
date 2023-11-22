import styled, {css} from 'styled-components/native';
import {Controller, useForm} from 'react-hook-form';
import {LabelFormInput} from '@shared/form-components/inputs/label-input';
import {schema} from '@features/auth/sign-up/schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  ButtonSize,
  PrimaryButton,
} from '@shared/ui/buttons/primary-button/primary-button';
import {TextButton} from '@shared/ui/buttons/text-button/text-button';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@app/navigation/navigators/root/root';

interface SubmitProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
}

export const SignUpPage = ({navigation}: SignUpScreenProps) => {
  const backgroundImageUrl = require('@shared/ui/assets/images/background-gradient.png');
  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {isValid} = formState;

  const onSubmit = (dataSubmit: SubmitProps) => {
    console.log(dataSubmit);
  };

  const handleSignInNavigate = () => {
    navigation.navigate('SignIn');
  };

  return (
    <StyledContainer>
      <StyledImage source={backgroundImageUrl} resizeMode="cover" />
      <StyledFormContainer>
        <StyledWrapper>
          <StyledTitle>Registration</StyledTitle>
          <ControllersContainer>
            <Controller
              control={control}
              name="name"
              rules={{required: true}}
              render={({field}) => (
                <LabelFormInput
                  field={field}
                  label="Name"
                  formState={formState}
                  isDirty={formState.dirtyFields.name}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              rules={{required: true}}
              render={({field}) => (
                <LabelFormInput
                  field={field}
                  label="Email"
                  formState={formState}
                  isDirty={formState.dirtyFields.email}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{required: true}}
              render={({field}) => (
                <LabelFormInput
                  field={field}
                  label="Password"
                  formState={formState}
                  isDirty={formState.dirtyFields.password}
                  isPassword
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              rules={{required: true}}
              render={({field}) => (
                <LabelFormInput
                  field={field}
                  label="Confirm password"
                  formState={formState}
                  isDirty={formState.dirtyFields.confirmPassword}
                  isPassword
                />
              )}
            />
          </ControllersContainer>
          <FooterContainer>
            <PrimaryButton
              title="Register"
              size={ButtonSize.large}
              isDisabled={!isValid}
              onPress={handleSubmit(onSubmit)}
            />
            <FooterWrapper>
              <FooterText>Already have an account?</FooterText>
              <TextButton title="Log in" onPress={handleSignInNavigate} />
            </FooterWrapper>
          </FooterContainer>
        </StyledWrapper>
      </StyledFormContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  justify-content: flex-end;
`;

const StyledWrapper = styled.ScrollView`
  padding: 36px 24px 40px 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${props => props.theme.colors.grayscale_100};
`;

const StyledFormContainer = styled.View`
  justify-content: flex-end;
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
  ${props => {
    return css`
      ${props.theme.typography.titleBold_28};
      color: ${props.theme.colors.grayscale_800};
      padding-bottom: 28px;
    `;
  }};
`;

const FooterText = styled.Text`
  ${props => {
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
