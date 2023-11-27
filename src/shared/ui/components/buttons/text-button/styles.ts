import { StyleSheet } from 'react-native';

import { COLORS } from '@shared/ui/styles/colors';
import { outfitTextStyles } from '@shared/ui/styles/typography';

export const styles = {
  textColor: {
    pressed: { color: COLORS.additional_error },
    disabled: { color: COLORS.grayscale_600 },
    initial: { color: COLORS.indicator_orange },
  },
  root: StyleSheet.create({
    fontText: outfitTextStyles.bodyMedium_16,
    container: {
      flex: 0,
    },
  }),
};

enum ElementStatus {
  disabled = 'disabled',
  pressed = 'pressed',
  initial = 'initial',
}

const getElementStatus = (isDisabled?: boolean, isPressed?: boolean) => {
  return isDisabled
    ? ElementStatus.disabled
    : isPressed
    ? ElementStatus.pressed
    : ElementStatus.initial;
};

export const getStyles = (pressed?: boolean, isDisabled?: boolean) => {
  const elementStatus = getElementStatus(isDisabled, pressed);
  return {
    ...styles.root,
    textColor: styles.textColor[elementStatus],
  };
};
