import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {getStyles} from './styles';
import {Spinner} from '@shared/ui/spinner/spinner';
import {SvgProps} from 'react-native-svg';

interface Props {
  Icon: (props: SvgProps) => JSX.Element;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
}

export const ButtonIcon: React.FC<Props> = ({
  Icon,
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
      style={[styles.container, styles.buttonColors.background]}
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
        <Icon color={styles.buttonColors.color} />
      )}
    </Pressable>
  );
};