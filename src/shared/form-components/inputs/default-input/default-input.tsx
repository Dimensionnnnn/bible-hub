import {forwardRef} from 'react';
import {UIDefaultInput} from '@shared/ui/inputs/default-input';
import {ControllerRenderProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {css} from 'styled-components/native';
import {Interpolation} from 'styled-components/native/dist/types';

interface Props extends TextInputProps {
  field: ControllerRenderProps<any, any>;
  isDisabled?: boolean;
  isDirty?: boolean;
}

export const DefaultFormInput = forwardRef<HTMLInputElement, Props>(
  ({field, isDisabled, isDirty, ...props}: Props, ref) => {
    const {value, onChange, onBlur} = field;

    const inputState: InputState | null = isDirty
      ? InputState.DIRTY
      : isDisabled
      ? InputState.DISABLED
      : null;

    const colors = inputState !== null ? defaultInputStyles[inputState] : null;

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
