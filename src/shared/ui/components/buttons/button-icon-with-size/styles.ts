import { StyleSheet } from 'react-native';

import { COLORS } from '@shared/ui/styles/colors';

import { ButtonSize } from './button-icon-with-size';

const styles = {
  colors: {
    extraSmall: {
      pressed: {
        color: COLORS.grayscale_800,
        background: { backgroundColor: COLORS.grayscale_500 },
      },
      disabled: {
        color: COLORS.grayscale_600,
        background: { backgroundColor: COLORS.grayscale_300 },
      },
      initial: {
        color: COLORS.grayscale_800,
        background: { backgroundColor: COLORS.grayscale_300 },
      },
      spinner: {
        color: COLORS.grayscale_800,
        strokeColor: COLORS.grayscale_600,
      },
    },
    small: {
      pressed: {
        color: COLORS.grayscale_800,
        background: { backgroundColor: COLORS.grayscale_500 },
      },
      disabled: {
        color: COLORS.grayscale_600,
        background: { backgroundColor: COLORS.grayscale_300 },
      },
      initial: {
        color: COLORS.grayscale_800,
        background: { backgroundColor: COLORS.grayscale_300 },
      },
      spinner: {
        color: COLORS.grayscale_800,
        strokeColor: COLORS.grayscale_600,
      },
    },
    medium: {
      pressed: {
        color: COLORS.grayscale_100,
        background: { backgroundColor: COLORS.grayscale_700 },
      },
      disabled: {
        color: COLORS.grayscale_100,
        background: { backgroundColor: COLORS.grayscale_500 },
      },
      initial: {
        color: COLORS.grayscale_100,
        background: { backgroundColor: COLORS.grayscale_800 },
      },
      spinner: {
        color: COLORS.grayscale_100,
        strokeColor: COLORS.grayscale_600,
      },
    },
    large: {
      pressed: {
        color: COLORS.grayscale_100,
        background: { backgroundColor: COLORS.grayscale_700 },
      },
      disabled: {
        color: COLORS.grayscale_100,
        background: { backgroundColor: COLORS.grayscale_500 },
      },
      initial: {
        color: COLORS.grayscale_100,
        background: { backgroundColor: COLORS.grayscale_800 },
      },
      spinner: {
        color: COLORS.grayscale_100,
        strokeColor: COLORS.grayscale_600,
      },
    },
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    extraSmall: {
      maxWidth: 34,
      height: 34,
      borderRadius: 32,
    },
    small: {
      maxWidth: 46,
      height: 46,
      borderRadius: 32,
    },
    medium: {
      maxWidth: 48,
      height: 48,
      borderRadius: 12,
    },
    large: {
      maxWidth: 65,
      height: 65,
      borderRadius: 95,
    },
  }),
};

enum ElementStatus {
  disabled = 'disabled',
  pressed = 'pressed',
  initial = 'initial',
}

const getButtonStatus = (isDisabled?: boolean, isPressed?: boolean) => {
  return isPressed
    ? ElementStatus.pressed
    : isDisabled
    ? ElementStatus.disabled
    : ElementStatus.initial;
};

interface Props {
  size: ButtonSize;
  isPressed?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const getStyles = ({ size, isPressed, isDisabled, isLoading }: Props) => {
  const buttonStatus = getButtonStatus(isDisabled, isPressed);
  return {
    container: styles.root.container,
    sizeContainer: styles.root[size],
    ...(isLoading && {
      spinnerColor: styles.colors[size].spinner.color,
      spinnerStrokeColor: styles.colors[size].spinner.strokeColor,
    }),
    buttonColors: styles.colors[size][buttonStatus],
  };
};
