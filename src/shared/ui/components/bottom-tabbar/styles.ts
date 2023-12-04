import { StyleSheet } from 'react-native';

import { COLORS } from '../../styles/colors';
import { outfitTextStyles } from '../../styles/typography';

const styles = {
  colors: {
    containerColor: { backgroundColor: COLORS.grayscale_100 },
    inconColors: {
      active: COLORS.grayscale_800,
      inactive: COLORS.grayscale_600,
    },
  },
  root: StyleSheet.create({
    fontLabel: outfitTextStyles.captionMedium_12,
    container: {
      height: 105,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      paddingTop: 12,
      paddingBottom: 36,
      paddingHorizontal: 20,
    },
  }),
};

export const getStyles = () => {
  return {
    ...styles.root,
    containerColor: styles.colors.containerColor,
    inconColors: styles.colors.inconColors,
  };
};
