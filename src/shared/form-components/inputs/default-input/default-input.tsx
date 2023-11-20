import React, {forwardRef} from 'react';
import {UIDefaultInput} from '@shared/ui/inputs/default-input';
import {ControllerRenderProps, FormState} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {css} from 'styled-components/native';
import {Interpolation} from 'styled-components/native/dist/types';

interface Props extends TextInputProps {
  field: ControllerRenderProps<any, any>;
  formState: FormState<any>;
  isDisabled?: boolean;
}

export const DefaultFormInput = forwardRef<HTMLInputElement, Props>(
  ({field, formState, isDisabled, ...props}: Props, ref) => {
    const {dirtyFields} = formState;
    const {name, value, onChange, onBlur} = field;

    const isDirty = dirtyFields?.[name];
    const colors = getInputColors(isDisabled, isDirty);

    return (
      <UIDefaultInput
        isDisabled={isDisabled}
        rootStyle={colors}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        ref={ref}
        {...props}
      />
    );
  },
);

enum InputState {
  DISABLED = 'isDisabled',
  DIRTY = 'isDirty',
}

const defaultInputStyles = {
  [InputState.DISABLED]: css`
    color: ${props => props.theme.colors.grayscale_500};
    border-bottom-color: ${props => props.theme.colors.grayscale_500};
  `,
  [InputState.DIRTY]: css`
    color: ${props => props.theme.colors.grayscale_800};
    border-bottom-color: ${props => props.theme.colors.grayscale_800};
  `,
} as Readonly<Record<InputState, Interpolation<typeof InputState>>>;

const getInputColors = (isDisabled?: boolean, isDirty?: boolean) => {
  if (isDisabled) {
    return defaultInputStyles[InputState.DISABLED];
  }

  if (isDirty) {
    return defaultInputStyles[InputState.DIRTY];
  }
};
