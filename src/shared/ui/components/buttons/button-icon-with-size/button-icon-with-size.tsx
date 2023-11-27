import { Spinner } from '@shared/ui/components/spinner/spinner';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { getStyles } from './styles';

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface Props {
  size: ButtonSize;
  Icon: (props: SvgProps) => JSX.Element;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
}

export const ButtonIconWithSize: React.FC<Props> = ({
  size = ButtonSize.medium,
  Icon,
  isDisabled,
  isLoading,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const styles = getStyles({
    size,
    isDisabled,
    isLoading,
    isPressed,
  });

  const handlePress = () => {
    setIsPressed((prevPressed) => !prevPressed);
  };

  return (
    <Pressable
      style={[styles.container, styles.sizeContainer, styles.buttonColors.background]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}
    >
      {isLoading ? (
        <Spinner color={styles.spinnerColor} stroke={styles.spinnerStrokeColor} />
      ) : (
        <Icon color={styles.buttonColors.color} />
      )}
    </Pressable>
  );
};
