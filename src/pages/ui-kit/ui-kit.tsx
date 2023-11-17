import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {PrimaryButton} from '@shared/ui/buttons/primary-button/primary-button';
import {ButtonSize as PrimaryButtonSize} from '@shared/ui/buttons/primary-button/primary-button';
import {SecondaryButton} from '@shared/ui/buttons/secondary-button/secondary-button';
import {SubscribeButton} from '@shared/ui/buttons/subscribe-button/subscribe-button';
import {TextButton} from '@shared/ui/buttons/text-button/text-button';
import {
  ButtonSize as DeleteButtonSize,
  DeleteButton,
} from '@shared/ui/buttons/delete-button/delete-button';
import {
  ButtonSize as ButtonIconSize,
  ButtonIconWithSize,
} from '@shared/ui/buttons/button-icon-with-size/button-icon-with-size';
import {SvgPlusIcon} from '@shared/ui/icons/components/svg-plus-icon';
import {SvgAirplaneIcon} from '@shared/ui/icons/components/svg-airplane-icon';
import {SvgArmsIcon} from '@shared/ui/icons/components/svg-arms-icon';
import {ButtonIcon} from '@shared/ui/buttons/button-icon/button-icon';
import {SvgBackIcon} from '@shared/ui/icons/components/svg-back-icon';
import {SvgExitIcon} from '@shared/ui/icons/components/svg-exit-icon';

export const UIKit = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PrimaryButton
        title="Add"
        size={PrimaryButtonSize.large}
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={PrimaryButtonSize.large}
        isDisabled
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={PrimaryButtonSize.large}
        isLoading
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={PrimaryButtonSize.large}
        isExit
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={PrimaryButtonSize.medium}
        onPress={() => console.log('Pressed')}
      />
      <PrimaryButton
        title="Add"
        size={PrimaryButtonSize.small}
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
      <DeleteButton onPress={() => console.log('Pressed')} />
      <DeleteButton
        size={DeleteButtonSize.small}
        onPress={() => console.log('Pressed')}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.large}
        Icon={SvgPlusIcon}
        onPress={() => console.log('Pressed')}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.large}
        Icon={SvgPlusIcon}
        isLoading
        onPress={() => console.log('Pressed')}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.large}
        Icon={SvgPlusIcon}
        isDisabled
        onPress={() => console.log('Pressed')}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.medium}
        Icon={SvgAirplaneIcon}
        onPress={() => console.log('Pressed')}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.medium}
        Icon={SvgAirplaneIcon}
        isLoading
        onPress={() => console.log('Pressed')}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.medium}
        Icon={SvgAirplaneIcon}
        isDisabled
        onPress={() => console.log('Pressed')}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.small}
        Icon={SvgArmsIcon}
        onPress={() => console.log('Pressed')}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.small}
        Icon={SvgArmsIcon}
        isLoading
        onPress={() => console.log('Pressed')}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.small}
        Icon={SvgArmsIcon}
        isDisabled
        onPress={() => console.log('Pressed')}
      />
      <ButtonIcon Icon={SvgBackIcon} onPress={() => console.log('Pressed')} />
      <ButtonIcon
        Icon={SvgBackIcon}
        isLoading
        onPress={() => console.log('Pressed')}
      />
      <ButtonIcon
        Icon={SvgBackIcon}
        isDisabled
        onPress={() => console.log('Pressed')}
      />
      <ButtonIcon Icon={SvgExitIcon} onPress={() => console.log('Pressed')} />
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
