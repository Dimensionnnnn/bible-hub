import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import {TextInputProps} from 'react-native';
import {CSSProp} from 'styled-components/native/dist/types';
import {UIDefaultInput} from '../default-input';
import {SvgCheckIcon} from '@shared/ui/icons/components/svg-check-icon';
import {SvgPasswordHiddenIcon} from '@shared/ui/icons/components/svg-password-hidden-icon';
import {SvgPasswordShowedIcon} from '@shared/ui/icons/components/svg-password-showed-icon';

export interface UIDefaultInputProps extends TextInputProps {
  label?: string;
  isDisabled?: boolean;
  isSuccess?: boolean;
  errorMessage?: string;
  isError?: boolean;
  isPassword?: boolean;
  iconColor?: string;
  rootStyle?: CSSProp;
  ref?: React.Ref<HTMLInputElement>;
}

export function UILabelInput({
  label,
  isDisabled,
  isSuccess,
  errorMessage,
  isError,
  isPassword,
  iconColor,
  rootStyle,
  ...props
}: UIDefaultInputProps) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handlePasswordHide = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <UIDefaultInput
        rootStyle={rootStyle}
        isDisabled={isDisabled}
        secureTextEntry={isPassword && isPasswordHidden}
        {...props}>
        {isSuccess && (
          <StyledIconContainer>
            <SvgCheckIcon />
          </StyledIconContainer>
        )}
        {!isSuccess && isPassword && (
          <StyledIconPressable onPress={handlePasswordHide}>
            {isPasswordHidden ? (
              <SvgPasswordHiddenIcon color={iconColor} />
            ) : (
              <SvgPasswordShowedIcon color={iconColor} />
            )}
          </StyledIconPressable>
        )}
        {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      </UIDefaultInput>
    </StyledContainer>
  );
}

const StyledLabel = styled.Text`
  ${props => props.theme.typography.headlineSemibold_16};
  color: ${props => props.theme.colors.grayscale_700};
`;

const StyledContainer = styled.View`
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const iconContainerStyles = css`
  position: absolute;
  right: 0;
  top: 32px;
`;

const StyledIconPressable = styled.Pressable`
  ${iconContainerStyles};
  > svg {
    color: ${props => props.theme.colors.additional_error};
  }
`;

const StyledIconContainer = styled.View`
  ${iconContainerStyles};
`;

const StyledErrorMessage = styled.Text`
  ${props => props.theme.typography.bodyRegular_14};
  color: ${props => props.theme.colors.additional_error};
  padding: 4px 0 4px;
`;
