import { TextStyle } from 'react-native';

enum fonts {
  OUTFIT_BOLD = 'outfit-bold',
  OUTFIT_SEMIBOLD = 'outfit-semibold',
  OUTFIT_REGULAR = 'outfit-regular',
  OUTFIT_MEDIUM = 'outfit-medium',
}

export const outfitTextStyles: { [key: string]: TextStyle } = {
  titleBold_28: {
    fontFamily: fonts.OUTFIT_BOLD,
    fontSize: 28,
    lineHeight: 39.2,
    fontWeight: '700',
  },
  titleSemibold_28: {
    fontFamily: fonts.OUTFIT_SEMIBOLD,
    fontSize: 28,
    lineHeight: 39.2,
    fontWeight: '600',
  },
  headlineSemibold_20: {
    fontFamily: fonts.OUTFIT_SEMIBOLD,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
  },
  headlineMedium_18: {
    fontFamily: fonts.OUTFIT_MEDIUM,
    fontSize: 18,
    lineHeight: 25.2,
    fontWeight: '500',
  },
  headlineRegular_18: {
    fontFamily: fonts.OUTFIT_REGULAR,
    fontSize: 18,
    lineHeight: 25.2,
    fontWeight: '400',
  },
  headlineSemibold_16: {
    fontFamily: fonts.OUTFIT_SEMIBOLD,
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '600',
  },
  bodyMedium_16: {
    fontFamily: fonts.OUTFIT_MEDIUM,
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '500',
  },
  bodyRegular_16: {
    fontFamily: fonts.OUTFIT_REGULAR,
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400',
  },
  bodyBold_14: {
    fontFamily: fonts.OUTFIT_BOLD,
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: '700',
  },
  bodyRegular_14: {
    fontFamily: fonts.OUTFIT_REGULAR,
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: '400',
  },
  captionRegular_12: {
    fontFamily: fonts.OUTFIT_REGULAR,
    fontSize: 12,
    lineHeight: 16.8,
    fontWeight: '400',
  },
};
