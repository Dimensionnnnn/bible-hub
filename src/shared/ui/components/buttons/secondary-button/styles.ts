import { COLORS } from '@shared/ui/styles/colors';
import { outfitTextStyles } from '@shared/ui/styles/typography';
import { StyleSheet } from 'react-native';

const styles = {
  colors: {
    button: {
      pressed: { backgroundColor: COLORS.grayscale_600 },
      initial: { backgroundColor: COLORS.grayscale_300 },
    },
    title: {
      disabled: { color: COLORS.grayscale_600 },
      initial: { color: COLORS.grayscale_800 },
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
      maxWidth: 147,
      width: '100%',
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
  }),
};

interface Props {
  isDisabled?: boolean;
  isLoading?: boolean;
  isPressed?: boolean;
}

export const getStyles = ({ isDisabled, isLoading, isPressed }: Props) => {
  return {
    ...styles.root,
    containerColor: styles.colors.button[isPressed ? 'pressed' : 'initial'],
    titleColor: styles.colors.title[isDisabled ? 'disabled' : 'initial'],
    ...(isLoading && {
      spinnerColor: styles.colors.spinner.color,
      spinnerStrokeColor: styles.colors.spinner.strokeColor,
    }),
  };
};
