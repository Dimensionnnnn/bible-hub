import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PrimaryButton} from '@shared/ui/buttons/primary-button/primary-button';
import {ButtonSize} from '@shared/ui/buttons/primary-button/primary-button';

export const App = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
  },
});

export default App;
