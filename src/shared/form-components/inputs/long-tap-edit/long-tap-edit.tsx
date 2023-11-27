import { UILongTapEdit } from '@shared/ui/components/inputs/long-tap-edit';
import { forwardRef } from 'react';
import { ControllerRenderProps, FormState } from 'react-hook-form';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  field: ControllerRenderProps<any, any>;
  formState: FormState<any>;
  isDisabled?: boolean;
}

export const LongTapFormEdit = forwardRef<TextInputProps, Props>(
  ({ field, isDisabled, formState, ...props }: Props, ref) => {
    const { isLoading } = formState;
    const { value, onChange, onBlur } = field;

    return (
      <UILongTapEdit
        isDisabled={isDisabled}
        isLoading={isLoading}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        ref={ref}
        {...props}
      />
    );
  },
);
