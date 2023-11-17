import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {PrimaryButton} from '@shared/ui/buttons/primary-button/primary-button';
import {ButtonSize} from '@shared/ui/buttons/primary-button/primary-button';
import {SecondaryButton} from '@shared/ui/buttons/secondary-button/secondary-button';
import {SubscribeButton} from '@shared/ui/buttons/subscribe-button/subscribe-button';
import {TextButton} from '@shared/ui/buttons/text-button/text-button';

export const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PrimaryButton
        title="Add"
        size={ButtonSize.large}
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={ButtonSize.large}
        isDisabled
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={ButtonSize.large}
        isLoading
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={ButtonSize.large}
        isExit
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={ButtonSize.medium}
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={ButtonSize.small}
        onPress={() => console.log('Pressed')}
      />
      <SecondaryButton title="Add" onPress={() => console.log('Pressed')} />
      <SecondaryButton
        title="Add"
        isDisabled
        onPress={() => console.log('Pressed')}
      />
      <SecondaryButton
        title="Add"
        isLoading
        onPress={() => console.log('Pressed')}
      />
      <SubscribeButton
        title="Following"
        isFollow
        onPress={() => console.log('Pressed')}
      />
      <SubscribeButton title="Follow" onPress={() => console.log('Pressed')} />
      <SubscribeButton
        title="Follow"
        isLoading
        onPress={() => console.log('Pressed')}
      />
      <SubscribeButton
        title="Following"
        isLoading
        isFollow
        onPress={() => console.log('Pressed')}
      />
      <SubscribeButton
        title="Following"
        isDisabled
        isFollow
        onPress={() => console.log('Pressed')}
      />
      <SubscribeButton
        title="Follow"
        isDisabled
        onPress={() => console.log('Pressed')}
      />
      <TextButton title="Log in" onPress={() => console.log('Pressed')} />
      <TextButton
        title="Log in"
        isDisabled
        onPress={() => console.log('Pressed')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
});

export default App;
