import UIDefaultInput from '@shared/ui/inputs/default-input/default-input';
import React from 'react';
import {Controller, Control, useFormContext} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {css} from 'styled-components/native';

interface Props extends TextInputProps {
  name: string;
  control: Control;
  isDisabled?: boolean;
}

function DefaultFormInput({name, control, isDisabled, ...props}: Props) {
  const {formState} = useFormContext();
  const {isDirty} = formState || {};

  const colors = getInputColors(isDisabled, isDirty);

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}}) => (
        <UIDefaultInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          isDisabled={isDisabled}
          rootStyle={colors}
          {...props}
        />
      )}
    />
  );
}

const getInputColors = (isDisabled?: boolean, isDirty?: boolean) => css`
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
  }}
`;

export default DefaultFormInput;
