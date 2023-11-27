import { StyleSheet } from 'react-native';

import { COLORS } from '@shared/ui/styles/colors';
import { outfitTextStyles } from '@shared/ui/styles/typography';

const styles = {
  colors: {
    button: {
      followed: {
        loading: { borderColor: COLORS.grayscale_300 },
        pressed: { borderColor: COLORS.grayscale_600 },
        initial: { borderColor: COLORS.grayscale_300 },
      },
      unFollowed: {
        loading: { borderColor: COLORS.grayscale_300 },
        pressed: { backgroundColor: COLORS.grayscale_600 },
        initial: { backgroundColor: COLORS.grayscale_300 },
      },
    },
    title: {
      disabled: { color: COLORS.grayscale_600 },
      initial: { color: COLORS.grayscale_800 },
    },
    icon: {
      disabled: COLORS.grayscale_600,
      initial: COLORS.grayscale_800,
    },
    spinner: {
      color: COLORS.grayscale_800,
      strokeColor: COLORS.grayscale_700,
    },
  },
  root: StyleSheet.create({
    fontTitle: outfitTextStyles.bodyMedium_16,
    container: {
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      maxWidth: 343,
      width: '100%',
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    containerUnfollowed: {
      borderWidth: 2,
      gap: 4,
    },
    containerLoading: {
      borderWidth: 2,
    },
    iconSize: {
      width: 16,
      height: 16,
    },
  }),
};

enum ElementStatus {
  disabled = 'disabled',
  pressed = 'pressed',
  loading = 'loading',
  initial = 'initial',
}

const getButtonStatus = (isLoading?: boolean, isPressed?: boolean) => {
  return isLoading
    ? ElementStatus.loading
    : isPressed
    ? ElementStatus.pressed
    : ElementStatus.initial;
};

const getContentStatus = (isDisabled?: boolean) => {
  return isDisabled ? ElementStatus.disabled : ElementStatus.initial;
};

interface Props {
  isFollow?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isPressed?: boolean;
}

export const getStyles = ({ isFollow, isDisabled, isLoading, isPressed }: Props) => {
  const buttonStatus = getButtonStatus(isLoading, isPressed);
  const contentStatus = getContentStatus(isDisabled);
  return {
    container: styles.root.container,
    containerUnfollowed: isFollow && styles.root.containerUnfollowed,
    containerLoading: isLoading && styles.root.containerLoading,
    containerColor: isFollow
      ? styles.colors.button.followed[buttonStatus]
      : styles.colors.button.unFollowed[buttonStatus],
    fontTitle: styles.root.fontTitle,
    titleColor: styles.colors.title[contentStatus],
    iconColor: styles.colors.icon[contentStatus],
    iconSize: styles.root.iconSize,
    ...(isLoading && {
      spinnerColor: styles.colors.spinner.color,
      spinnerStrokeColor: styles.colors.spinner.strokeColor,
    }),
  };
};
