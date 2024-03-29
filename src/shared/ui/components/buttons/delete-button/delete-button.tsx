import { Pressable } from 'react-native';

import { SvgTrashIcon } from '@shared/ui/icons/components/svg-trash-icon';

import { getStyles } from './styles';

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
}

interface Props {
  size?: ButtonSize;
  onPress?: () => void;
}

export const DeleteButton: React.FC<Props> = ({ size = ButtonSize.medium, onPress }) => {
  const styles = getStyles(size);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles.sizeContainer, styles.containerColor]}
    >
      <SvgTrashIcon />
    </Pressable>
  );
};
