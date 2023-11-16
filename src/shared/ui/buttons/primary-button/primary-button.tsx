import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {getStyles} from './styles';

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface Props {
  title: string;
  size: ButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  isExit?: boolean;
  onPress: () => void;
}

export const PrimaryButton: React.FC<Props> = ({
  title,
  size = ButtonSize.medium,
  isDisabled,
  isLoading,
  isExit,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = getStyles({
    size,
    isDisabled,
    isLoading,
    isExit,
    isPressed,
  });

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  return (
    <Pressable
      style={[styles.container, styles.sizeContainer, styles.containerColor]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      <Text style={[styles.fontTitle, styles.titleColor]}>{title}</Text>
    </Pressable>
  );
};
