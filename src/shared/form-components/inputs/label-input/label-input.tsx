import React, {forwardRef} from 'react';
import {UILabelInput} from '@shared/ui/inputs/label-input';
import {ControllerRenderProps, FormState} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {DefaultTheme, css, useTheme} from 'styled-components/native';
import {Interpolation} from 'styled-components/native/dist/types';

interface Props extends TextInputProps {
  field: ControllerRenderProps<any, any>;
  formState: FormState<any>;
  label?: string;
  isPassword?: boolean;
  isDisabled?: boolean;
}

export const LabelFormInput = forwardRef<HTMLInputElement, Props>(
  ({field, formState, label, isPassword, isDisabled, ...props}: Props, ref) => {
    const {errors, isSubmitSuccessful, dirtyFields} = formState;
    const {name, value, onChange, onBlur} = field;
    const theme = useTheme();

    const isDirty = dirtyFields?.[name];

    const inputState: InputState | null = isDirty
      ? InputState.DIRTY
      : isDisabled
      ? InputState.DISABLED
      : isSubmitSuccessful
      ? InputState.SUCCESS
      : errors.root
      ? InputState.ERROR
      : null;

    const inputColors =
      inputState !== null ? labelInputStyles[inputState] : null;

    const iconColor = getIconColor(
      theme,
      isDisabled,
      isDirty,
      isSubmitSuccessful,
      !!errors.root,
    );

    return (
      <UILabelInput
        label={label}
        errorMessage={errors.root?.message}
        isError={!!errors.root}
        isSuccess={isSubmitSuccessful}
        isPassword={isPassword}
        isDisabled={isDisabled}
        iconColor={iconColor}
        rootStyle={inputColors}
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
  SUCCESS = 'isSuccess',
  ERROR = 'isError',
}

const labelInputStyles = {
  [InputState.DISABLED]: css`
    color: ${props => props.theme.colors.grayscale_500};
    border-bottom-color: ${props => props.theme.colors.grayscale_500};
  `,
  [InputState.DIRTY]: css`
    color: ${props => props.theme.colors.grayscale_800};
    border-bottom-color: ${props => props.theme.colors.grayscale_800};
  `,
  [InputState.SUCCESS]: css`
    color: ${props => props.theme.colors.additional_success};
    border-bottom-color: ${props => props.theme.colors.additional_success};
  `,
  [InputState.ERROR]: css`
    color: ${props => props.theme.colors.additional_error};
    border-bottom-color: ${props => props.theme.colors.additional_error};
  `,
} as Readonly<Record<InputState, Interpolation<typeof InputState>>>;

const getIconColor = (
  theme: DefaultTheme,
  isDisabled?: boolean,
  isDirty?: boolean,
  isSuccess?: boolean,
  isError?: boolean,
) => {
  if (isDisabled) {
    return theme.colors.grayscale_500;
  }

  if (isDirty) {
    return theme.colors.grayscale_800;
  }

  if (isSuccess) {
    return theme.colors.additional_success;
  }

  if (isError) {
    return theme.colors.additional_error;
  }

  return theme.colors.grayscale_600;
};
