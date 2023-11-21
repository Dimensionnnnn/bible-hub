import {DefaultFormInput} from '@shared/form-components/inputs/default-input';
import {LabelFormInput} from '@shared/form-components/inputs/label-input';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {LongTapFormEdit} from '@shared/form-components/inputs/long-tap-edit';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    middleName: yup.string().required(),
  })
  .required();

export const Page = () => {
  const {control, handleSubmit, formState} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      middleName: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <View>
      <Controller
        control={control}
        name="firstName"
        rules={{required: true}}
        render={({field}) => (
          <LabelFormInput
            field={field}
            label="Label"
            formState={formState}
            isDirty={formState.dirtyFields.firstName}
            isPassword
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        rules={{required: true}}
        render={({field}) => (
          <DefaultFormInput
            field={field}
            isDirty={formState.dirtyFields.lastName}
          />
        )}
      />
      <Controller
        control={control}
        name="middleName"
        rules={{required: true}}
        render={({field}) => (
          <LongTapFormEdit field={field} formState={formState} />
        )}
      />
    </View>
  );
};
