import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {getStyles} from './styles';
import {Spinner} from '@shared/ui/spinner/spinner';

interface Props {
  title: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
}

export const SecondaryButton: React.FC<Props> = ({
  title,
  isDisabled,
  isLoading,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = getStyles({
    isDisabled,
    isLoading,
    isPressed,
  });

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  return (
    <Pressable
      style={[styles.container, styles.containerColor]}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePress}
      onPressOut={handlePress}>
      {isLoading ? (
        <Spinner
          color={styles.spinnerColor}
          stroke={styles.spinnerStrokeColor}
        />
      ) : (
        <Text style={[styles.fontTitle, styles.titleColor]}>{title}</Text>
      )}
    </Pressable>
  );
};
