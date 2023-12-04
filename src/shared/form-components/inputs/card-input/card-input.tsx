import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { useAppDispatch } from '@shared/store';
import { UICardInput } from '@shared/ui/components/inputs/card-input';

import { schema } from './schema';

interface Props extends TextInputProps {
  title?: string;
  onCloseBackdrop?: () => void;
  dispatchAction: (title: string) => any;
}

export const CardFormInput = ({ title, onCloseBackdrop, dispatchAction, ...props }: Props) => {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: title || '',
    },
  });

  const onSubmit = (dataSubmit: any) => {
    dispatch(dispatchAction(dataSubmit.title));
    onCloseBackdrop?.();
  };

  return (
    <Controller
      control={control}
      name="title"
      render={(renderProps) => (
        <UICardInput {...props} {...renderProps} onSubmitEditing={handleSubmit(onSubmit)} />
      )}
    />
  );
};
