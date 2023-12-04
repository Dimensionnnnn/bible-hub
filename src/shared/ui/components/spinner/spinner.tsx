import { Animated, Easing } from 'react-native';

import { SvgSpinnerIcon } from '@shared/ui/icons/components/svg-spinner-icon';

interface Props {
  color?: string;
  stroke?: string;
}

export const Spinner: React.FC<Props> = ({ color, stroke }) => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <SvgSpinnerIcon color={color} stroke={stroke} />
    </Animated.View>
  );
};
