import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { getStyles } from './styles';

interface Props {
  title?: string;
  isDisabled?: boolean;
  onPress?: () => void;
}

export const TextButton: React.FC<Props> = ({ title, isDisabled, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = getStyles(isPressed, isDisabled);

  const handlePress = () => {
    setIsPressed((prevPressed) => !prevPressed);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}
      style={styles.container}
      disabled={isDisabled}
    >
      <Text style={[styles.fontText, styles.textColor]}>{title}</Text>
    </Pressable>
  );
};
