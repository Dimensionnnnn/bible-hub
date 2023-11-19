import React from 'react';
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
  return (
    <>
      <StyledInput rootStyle={rootStyle} editable={!isDisabled} {...props} />
      {children}
    </>
  );
}

const StyledInput = styled.TextInput<{
  rootStyle?: CSSProp;
}>`
  ${props => {
    return css`
      ${props.theme.default.typography.bodyRegular_16};
      color: ${props.theme.default.colors.grayscale_600};
      border-bottom-color: ${props.theme.default.colors.grayscale_600};
    `;
  }};

  border-bottom-width: 1px;
  padding: 4px 0 12px 0;
  width: 100%;

  ${({rootStyle}) => rootStyle};
`;

export default UIDefaultInput;
