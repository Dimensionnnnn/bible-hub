import {forwardRef} from 'react';
import {TextInputProps} from 'react-native';
import {ControllerRenderProps, FormState} from 'react-hook-form';
import {UILongTapEdit} from '@shared/ui/inputs/long-tap-edit';

interface Props extends TextInputProps {
  field: ControllerRenderProps<any, any>;
  formState: FormState<any>;
  isDisabled?: boolean;
}

export const LongTapFormEdit = forwardRef<TextInputProps, Props>(
  ({field, isDisabled, formState, ...props}: Props, ref) => {
    const {isLoading} = formState;
    const {value, onChange, onBlur} = field;

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
