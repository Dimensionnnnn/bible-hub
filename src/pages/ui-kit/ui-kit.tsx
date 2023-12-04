import { ScrollView, StyleSheet } from 'react-native';

import {
  ButtonSize as ButtonIconSize,
  ButtonIconWithSize,
} from '@shared/ui/components/buttons/button-icon-with-size/button-icon-with-size';
import { ButtonIcon } from '@shared/ui/components/buttons/button-icon/button-icon';
import {
  DeleteButton,
  ButtonSize as DeleteButtonSize,
} from '@shared/ui/components/buttons/delete-button/delete-button';
import {
  PrimaryButton,
  ButtonSize as PrimaryButtonSize,
} from '@shared/ui/components/buttons/primary-button/primary-button';
import { SecondaryButton } from '@shared/ui/components/buttons/secondary-button/secondary-button';
import { SubscribeButton } from '@shared/ui/components/buttons/subscribe-button/subscribe-button';
import { TextButton } from '@shared/ui/components/buttons/text-button/text-button';
import { UIDeskCard } from '@shared/ui/components/desk-card';
import { UICardInput } from '@shared/ui/components/inputs/card-input';
import { UICommentInput } from '@shared/ui/components/inputs/comment-input';
import { UIDefaultInput } from '@shared/ui/components/inputs/default-input';
import { UILabelInput } from '@shared/ui/components/inputs/label-input';
import { UIPrayerCard } from '@shared/ui/components/prayer-card';
import { SvgAirplaneIcon } from '@shared/ui/icons/components/svg-airplane-icon';
import { SvgArmsIcon } from '@shared/ui/icons/components/svg-arms-icon';
import { SvgBackIcon } from '@shared/ui/icons/components/svg-back-icon';
import { SvgExitIcon } from '@shared/ui/icons/components/svg-exit-icon';
import { SvgPlusIcon } from '@shared/ui/icons/components/svg-plus-icon';

export const UIKit = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <UICardInput placeholder="Placeholder" />
      <PrimaryButton title="Add" size={PrimaryButtonSize.large} onPress={() => {}} />
      <PrimaryButton title="Add" size={PrimaryButtonSize.large} isDisabled onPress={() => {}} />
      <PrimaryButton title="Add" size={PrimaryButtonSize.large} isLoading onPress={() => {}} />
      <PrimaryButton title="Add" size={PrimaryButtonSize.large} isExit onPress={() => {}} />
      <PrimaryButton title="Add" size={PrimaryButtonSize.medium} onPress={() => {}} />
      <PrimaryButton title="Add" size={PrimaryButtonSize.small} onPress={() => {}} />
      <SecondaryButton title="Add" onPress={() => {}} />
      <SecondaryButton title="Add" isDisabled onPress={() => {}} />
      <SecondaryButton title="Add" isLoading onPress={() => {}} />
      <SubscribeButton title="Following" isFollow onPress={() => {}} />
      <SubscribeButton title="Follow" onPress={() => {}} />
      <SubscribeButton title="Follow" isLoading onPress={() => {}} />
      <SubscribeButton title="Following" isLoading isFollow onPress={() => {}} />
      <SubscribeButton title="Following" isDisabled isFollow onPress={() => {}} />
      <SubscribeButton title="Follow" isDisabled onPress={() => {}} />
      <TextButton title="Log in" onPress={() => {}} />
      <TextButton title="Log in" isDisabled onPress={() => {}} />
      <DeleteButton onPress={() => {}} />
      <DeleteButton size={DeleteButtonSize.small} onPress={() => {}} />
      <ButtonIconWithSize size={ButtonIconSize.large} Icon={SvgPlusIcon} onPress={() => {}} />
      <ButtonIconWithSize
        size={ButtonIconSize.large}
        Icon={SvgPlusIcon}
        isLoading
        onPress={() => {}}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.large}
        Icon={SvgPlusIcon}
        isDisabled
        onPress={() => {}}
      />
      <ButtonIconWithSize size={ButtonIconSize.medium} Icon={SvgAirplaneIcon} onPress={() => {}} />
      <ButtonIconWithSize
        size={ButtonIconSize.medium}
        Icon={SvgAirplaneIcon}
        isLoading
        onPress={() => {}}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.medium}
        Icon={SvgAirplaneIcon}
        isDisabled
        onPress={() => {}}
      />
      <ButtonIconWithSize size={ButtonIconSize.small} Icon={SvgArmsIcon} onPress={() => {}} />
      <ButtonIconWithSize
        size={ButtonIconSize.small}
        Icon={SvgArmsIcon}
        isLoading
        onPress={() => {}}
      />
      <ButtonIconWithSize
        size={ButtonIconSize.small}
        Icon={SvgArmsIcon}
        isDisabled
        onPress={() => {}}
      />
      <ButtonIcon Icon={SvgBackIcon} onPress={() => {}} />
      <ButtonIcon Icon={SvgBackIcon} isLoading onPress={() => {}} />
      <ButtonIcon Icon={SvgBackIcon} isDisabled onPress={() => {}} />
      <ButtonIcon Icon={SvgExitIcon} onPress={() => {}} />
      <UIDefaultInput placeholder="Placeholder" />
      <UILabelInput placeholder="Placeholder" label="Label" isSuccess />
      <UILabelInput placeholder="Placeholder" label="Label" />
      <UILabelInput placeholder="Placeholder" label="Label" isError errorMessage="Error" />
      <UICommentInput placeholder="Placeholder" onPress={() => {}} />
      <UICommentInput placeholder="Placeholder" isDisabled onPress={() => {}} />
      <UILabelInput placeholder="Placeholder" label="Label" />
      <UILabelInput placeholder="Placeholder" label="Label" isDisabled />
      <UIDeskCard title="Title" />
      <UIDeskCard title="Title" isDisabled />
      <UIDeskCard title="Title" isLoading />
      <UIPrayerCard
        title="Title"
        membersCount={32}
        completedCount={120}
        onCardPress={() => {}}
        onCompletePress={() => {}}
      />
      <UIPrayerCard title="Title" isLoading onCardPress={() => {}} onCompletePress={() => {}} />
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
