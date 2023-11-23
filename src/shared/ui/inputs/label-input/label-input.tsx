import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import {TextInputProps} from 'react-native';
import {CSSProp} from 'styled-components/native/dist/types';
import UIDefaultInput from '../default-input/default-input';
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
  rootStyle?: CSSProp;
}

function UILabelInput({
  label,
  isDisabled,
  isSuccess,
  errorMessage,
  isError,
  isPassword,
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
        rootStyle={getInputStyles({isSuccess, isError, rootStyle})}
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
              <SvgPasswordHiddenIcon color="black" />
            ) : (
              <SvgPasswordShowedIcon color="black" />
            )}
          </StyledIconPressable>
        )}
        {isError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      </UIDefaultInput>
    </StyledContainer>
  );
}

const StyledLabel = styled.Text`
  ${props => props.theme.default.typography.headlineSemibold_16};
  color: ${props => props.theme.default.colors.grayscale_700};
`;

const StyledContainer = styled.View`
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 327px;
`;

const iconContainerStyles = css`
  position: absolute;
  right: 0;
  top: 32px;
`;

const StyledIconPressable = styled.Pressable`
  ${iconContainerStyles};
`;

const StyledIconContainer = styled.View`
  ${iconContainerStyles};
`;

const StyledErrorMessage = styled.Text`
  ${props => props.theme.default.typography.bodyRegular_14};
  color: ${props => props.theme.default.colors.additional_error};
  padding: 4px 0 4px;
`;

const getInputStyles = ({
  isSuccess,
  isError,
  rootStyle,
}: {
  isSuccess?: boolean;
  isError?: boolean;
  rootStyle?: CSSProp;
}) => css`
  ${props => {
    if (isSuccess) {
      return css`
        color: ${props.theme.default.colors.additional_success};
        border-bottom-color: ${props.theme.default.colors.additional_success};
      `;
    }

    if (isError) {
      return css`
        color: ${props.theme.default.colors.additional_error};
        border-bottom-color: ${props.theme.default.colors.additional_error};
      `;
    }
  }}

  ${rootStyle};
`;

export default UILabelInput;
