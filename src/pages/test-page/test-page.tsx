import LabelFormInput from '@shared/form-components/inputs/label-input/label-input';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {View} from 'react-native';

export const Page = () => {
  const methods = useForm();

  return (
    <View>
      <FormProvider {...methods}>
        <LabelFormInput
          name="firstName"
          control={methods.control}
          label="First name"
          placeholder="Enter first name"
          isPassword
        />
      </FormProvider>
    </View>
  );
};
