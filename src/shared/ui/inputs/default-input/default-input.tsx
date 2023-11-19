import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import {TextInputProps} from 'react-native';
import {CSSProp} from 'styled-components/native/dist/types';

export interface UIDefaultInputProps extends TextInputProps {
  isDisabled?: boolean;
  rootStyle?: CSSProp;
  children?: React.ReactNode;
}

function UIDefaultInput({
  isDisabled,
  rootStyle,
  children,
  ...props
}: UIDefaultInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsFilled(!!props.value);
  };

  const handleChangeText = (text: string) => {
    setIsFilled(!!text);
  };

  return (
    <>
      <StyledInput
        rootStyle={rootStyle}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isFilled={isFilled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        {...props}
      />
      {children}
    </>
  );
}

const StyledInput = styled.TextInput<{
  isFocused?: boolean;
  isFilled?: boolean;
  isDisabled?: boolean;
  rootStyle?: CSSProp;
}>`
  ${props => props.theme.default.typography.bodyRegular_16};

  ${props => {
    if (props.isDisabled) {
      return css`
        color: ${props.theme.default.colors.grayscale_500};
        border-bottom-color: ${props.theme.default.colors.grayscale_500};
      `;
    }

    if (props.isFocused || props.isFilled) {
      return css`
        color: ${props.theme.default.colors.grayscale_800};
        border-bottom-color: ${props.theme.default.colors.grayscale_800};
      `;
    }

    return css`
      color: ${props.theme.default.colors.grayscale_600};
      border-bottom-color: ${props.theme.default.colors.grayscale_600};
    `;
  }}

  border-bottom-width: 1px;
  padding: 4px 0 12px 0;
  width: 100%;

  ${({rootStyle}) => rootStyle};
`;

export default UIDefaultInput;
