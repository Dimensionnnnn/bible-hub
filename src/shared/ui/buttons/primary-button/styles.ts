import {StyleSheet} from 'react-native';
import {ButtonSize} from './primary-button';
import {outfitTextStyles} from '@shared/ui/styles/typography';
import {COLORS} from '@shared/ui/styles/colors';

const styles = {
  colors: {
    button: {
      disabled: {backgroundColor: COLORS.grayscale_500},
      pressed: {backgroundColor: COLORS.grayscale_700},
      initial: {backgroundColor: COLORS.grayscale_800},
    },
    title: {
      exit: {color: COLORS.additional_error},
      initial: {color: COLORS.grayscale_100},
    },
    spinner: {
      color: COLORS.grayscale_600,
      strokeColor: COLORS.grayscale_100,
    },
  },
  sizes: {
    small: {
      padding: 12,
      maxWidth: 147,
    },
    large: {
      maxWidth: 327,
    },
    medium: {},
  },
  root: StyleSheet.create({
    fontTitle: outfitTextStyles.bodyMedium_16,
    container: {
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 295,
      width: '100%',
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
  }),
};

interface Props {
  size: ButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  isExit?: boolean;
  isPressed?: boolean;
}

export const getStyles = ({
  size,
  isDisabled,
  isLoading,
  isExit,
  isPressed,
}: Props) => {
  return {
    container: styles.root.container,
    fontTitle: styles.root.fontTitle,
    sizeContainer: styles.sizes[size],
    containerColor:
      styles.colors.button[
        isDisabled ? 'disabled' : isPressed ? 'pressed' : 'initial'
      ],
    titleColor: styles.colors.title[isExit ? 'exit' : 'initial'],
    spinnerColor: isLoading && styles.colors.spinner.color,
    spinnerStrokeColor: isLoading && styles.colors.spinner.strokeColor,
  };
};
