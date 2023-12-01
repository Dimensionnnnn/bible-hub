import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { schema } from '@features/modal-create/schema';

import {
  ButtonSize,
  PrimaryButton,
} from '@shared/ui/components/buttons/primary-button/primary-button';

import { DefaultFormInput } from '../inputs/default-input';

interface Props {
  placeholder: string;
  onCloseModal: () => void;
  dispatchAction: (title: string) => any;
}

export const ModalForm = ({ placeholder, dispatchAction, onCloseModal }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
    },
  });

  const onSubmit = (dataSubmit: any) => {
    dispatchAction(dataSubmit.title);
    onCloseModal();
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
