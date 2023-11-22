import {forwardRef} from 'react';
import {UILabelInput} from '@shared/ui/inputs/label-input';
import {ControllerRenderProps, FormState} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {DefaultTheme, css, useTheme} from 'styled-components/native';
import {Interpolation} from 'styled-components/native/dist/types';
import {UIPasswordInput} from '@shared/ui/inputs/password-input';

interface Props extends TextInputProps {
  field: ControllerRenderProps<any, any>;
  formState: FormState<any>;
  label?: string;
  isPassword?: boolean;
  isDisabled?: boolean;
  isDirty?: boolean;
}

export const FormInput = forwardRef<TextInputProps, Props>(
  (
    {field, formState, label, isPassword, isDisabled, isDirty, ...props}: Props,
    ref,
  ) => {
    const {errors, isSubmitSuccessful} = formState;
    const {value, onChange, onBlur} = field;
    const theme = useTheme();

    const name = field?.name;
    const errorMessage = errors[name]?.message?.toString() || '';

    const inputState: InputState | null = isDirty
      ? InputState.DIRTY
      : isDisabled
      ? InputState.DISABLED
      : isSubmitSuccessful
      ? InputState.SUCCESS
      : errors[name]
      ? InputState.ERROR
      : InputState.DEFAULT;

    const inputColors = labelInputStyles[inputState];

    const iconColor = iconColors(theme)[inputState];

    if (isPassword) {
      return (
        <UIPasswordInput
          label={label}
          errorMessage={errors.root?.message}
          isError={!!errors.root}
          isSuccess={isSubmitSuccessful}
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
    } else {
      return (
        <UILabelInput
          label={label}
          errorMessage={errors.root?.message}
          isError={!!errors.root}
          isSuccess={isSubmitSuccessful}
          isDisabled={isDisabled}
          rootStyle={inputColors}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          ref={ref}
          {...props}
        />
      );
    }
  },
);

enum InputState {
  DISABLED = 'isDisabled',
  DIRTY = 'isDirty',
  SUCCESS = 'isSuccess',
  ERROR = 'isError',
  DEFAULT = 'isDefault',
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

const iconColors = (theme: DefaultTheme) =>
  ({
    [InputState.DISABLED]: theme.colors.grayscale_500,
    [InputState.DIRTY]: theme.colors.grayscale_800,
    [InputState.SUCCESS]: theme.colors.additional_success,
    [InputState.ERROR]: theme.colors.additional_error,
    [InputState.DEFAULT]: theme.colors.grayscale_600,
  } as Readonly<Record<InputState, string>>);