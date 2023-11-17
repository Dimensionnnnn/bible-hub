import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/ui/styles/colors';
import {ButtonSize} from './delete-button';

export const styles = {
  sizes: {
    small: {
      height: 76,
    },
    medium: {
      height: 95,
    },
  },
  root: StyleSheet.create({
    containerColor: {backgroundColor: COLORS.additional_error},
    container: {
      borderTopRightRadius: 24,
      borderBottomRightRadius: 24,
      paddingLeft: 40,
      paddingRight: 16,
      width: '100%',
      maxWidth: 76,
      justifyContent: 'center',
    },
  }),
};

export const getStyles = (size: ButtonSize) => {
  return {
    ...styles.root,
    sizeContainer: styles.sizes[size],
  };
};
