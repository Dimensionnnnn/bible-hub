import { Controller, useForm } from 'react-hook-form';

import {
  ButtonSize,
  PrimaryButton,
} from '@shared/ui/components/buttons/primary-button/primary-button';

import { DefaultFormInput } from '../inputs/default-input';

interface Props {
  placeholder: string;
  dispatchAction?: (title: string) => any;
}

export const ModalForm = ({ placeholder, dispatchAction }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      title: '',
    },
  });

  const onSubmit = (dataSubmit: any) => {
    console.log(dataSubmit);
  };

  return (
    <>
      <Controller
        control={control}
        name="title"
        render={(renderProps) => (
          <DefaultFormInput placeholder={placeholder} isDirty={isDirty} {...renderProps} />
        )}
      />
      <PrimaryButton
        title="Add"
        isDisabled={!isDirty}
        size={ButtonSize.medium}
        onPress={handleSubmit(onSubmit)}
      />
    </>
  );
};
