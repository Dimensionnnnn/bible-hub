import { StyleSheet } from 'react-native';

import { COLORS } from '@shared/ui/styles/colors';

const styles = {
  colors: {
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
      background: { backgroundColor: COLORS.grayscale_100 },
    },
    spinner: {
      color: COLORS.grayscale_800,
      strokeColor: COLORS.grayscale_600,
    },
  },
  root: StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 46,
      height: 46,
      borderRadius: 32,
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
  isPressed?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const getStyles = ({ isPressed, isDisabled, isLoading }: Props) => {
  const buttonStatus = getButtonStatus(isDisabled, isPressed);
  return {
    container: styles.root.container,
    buttonColors: styles.colors[buttonStatus],
    ...(isLoading && {
      spinnerColor: styles.colors.spinner.color,
      spinnerStrokeColor: styles.colors.spinner.strokeColor,
    }),
  };
};
