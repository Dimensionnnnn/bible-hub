import { Ref, forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import {
  NativeSyntheticEvent,
  TextInputProps,
  TextInputSubmitEditingEventData,
} from 'react-native';
import styled, { css } from 'styled-components/native';
import { CSSProp } from 'styled-components/native/dist/types';

interface Props extends TextInputProps {
  field: ControllerRenderProps<any, any>;
  rootPressableStyle?: CSSProp;
  rootTextStyle?: CSSProp;
  ref?: Ref<TextInputProps>;
  isOpened?: boolean;
  onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
}

export const UICardInput = forwardRef<TextInputProps, Props>(
  ({ field, onSubmitEditing, ...props }, ref) => {
    const { value, onChange, onBlur } = field;

    return (
      <StyledContainer>
        <StyledInput
          ref={ref}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          {...props}
        />
      </StyledContainer>
    );
  },
);

const textStyles = css`
  width: 100%;

  ${(props) => {
    return css`
      ${props.theme.typography.headlineSemibold_20};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}
`;

const StyledContainer = styled.View`
  width: 100%;
  height: 44px;
  max-width: 193px;
  margin: -10px -5px;
`;

const StyledInput = styled.TextInput<{
  rootTextStyle?: CSSProp;
}>`
  ${textStyles}
  ${({ rootTextStyle }) => rootTextStyle};
`;
