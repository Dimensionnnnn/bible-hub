import styled from 'styled-components/native';

import {
  ButtonIconWithSize,
  ButtonSize,
} from '@shared/ui/components/buttons/button-icon-with-size/button-icon-with-size';
import { SvgPlusIcon } from '@shared/ui/icons/components/svg-plus-icon';

interface Props {
  onOpenToggle: () => void;
}

export const ModalTrigerButton = ({ onOpenToggle }: Props) => {
  return (
    <StyledButtonContainer>
      <ButtonIconWithSize size={ButtonSize.large} Icon={SvgPlusIcon} onPress={onOpenToggle} />
    </StyledButtonContainer>
  );
};

const StyledButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  right: 16px;
  align-items: flex-end;
`;
