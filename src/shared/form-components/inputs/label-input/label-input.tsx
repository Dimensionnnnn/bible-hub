import UILabelInput from '@shared/ui/inputs/label-input/label-input';
import React from 'react';
import {Controller, Control, useFormContext} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {DefaultTheme, css, useTheme} from 'styled-components/native';

interface Props extends TextInputProps {
  name: string;
  control: Control<any>;
  label?: string;
  isPassword?: boolean;
  isDisabled?: boolean;
}

function LabelFormInput({
  name,
  control,
  label,
  isPassword,
  isDisabled,
  ...props
}: Props) {
  const {formState} = useFormContext();
  const {isDirty, errors, isSubmitSuccessful} = formState;
  const theme = useTheme();

  const inputColors = getInputColors(
    isDisabled,
    isDirty,
    isSubmitSuccessful,
    !!errors.root,
  );

  const iconColor = getIconColor(
    theme,
    isDisabled,
    isDirty,
    isSubmitSuccessful,
    !!errors.root,
  );

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: true,
          message: 'This field is required',
        },
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <UILabelInput
          label={label}
          value={value}
          errorMessage={errors.root?.message}
          isError={!!errors.root}
          isSuccess={isSubmitSuccessful}
          isPassword={isPassword}
          isDisabled={isDisabled}
          onBlur={onBlur}
          onChangeText={onChange}
          iconColor={iconColor}
          rootStyle={inputColors}
          {...props}
        />
      )}
    />
  );
}

const getInputColors = (
  isDisabled?: boolean,
  isDirty?: boolean,
  isSuccess?: boolean,
  isError?: boolean,
) => css`
  ${props => {
    if (isDisabled) {
      return css`
        color: ${props.theme.default.colors.grayscale_500};
        border-bottom-color: ${props.theme.default.colors.grayscale_500};
      `;
    }

    if (isDirty) {
      return css`
        color: ${props.theme.default.colors.grayscale_800};
        border-bottom-color: ${props.theme.default.colors.grayscale_800};
      `;
    }

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
`;

const getIconColor = (
  theme: DefaultTheme,
  isDisabled?: boolean,
  isDirty?: boolean,
  isSuccess?: boolean,
  isError?: boolean,
) => {
  if (isDisabled) {
    return theme.default.colors.grayscale_500;
  }

  if (isDirty) {
    return theme.default.colors.grayscale_800;
  }

  if (isSuccess) {
    return theme.default.colors.additional_success;
  }

  if (isError) {
    return theme.default.colors.additional_error;
  }

  return theme.default.colors.grayscale_600;
};

export default LabelFormInput;
