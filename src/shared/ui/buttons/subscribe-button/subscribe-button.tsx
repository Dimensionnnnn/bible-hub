import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {getStyles} from './styles';
import {Spinner} from '@shared/ui/spinner/spinner';
import {SvgCheckSubscribeIcon} from '@shared/ui/icons/components/svg-check-subscribe-icon';

interface Props {
  title: string;
  isFollow?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
}

export const SubscribeButton: React.FC<Props> = ({
  title,
  isFollow,
  isDisabled,
  isLoading,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = getStyles({
    isFollow,
    isDisabled,
    isLoading,
    isPressed,
  });

  const handlePress = () => {
    setIsPressed(prevPressed => !prevPressed);
  };

  return (
    <Pressable
      style={[
        styles.container,
        styles.containerColor,
        styles.containerLoading,
        styles.containerUnfollowed,
      ]}
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
      {!isLoading && isFollow && (
        <SvgCheckSubscribeIcon
          color={styles.iconColor}
          width={styles.iconSize.width}
          height={styles.iconSize.height}
        />
      )}
    </Pressable>
  );
};
