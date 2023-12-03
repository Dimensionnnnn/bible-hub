import styled, { css } from 'styled-components/native';

import { LayoutModal } from '@widgets/layouts/modal';

import { ModalForm } from '@shared/form-components/modal-form';
import {
  ButtonSize as ButtonIconSize,
  ButtonIconWithSize,
} from '@shared/ui/components/buttons/button-icon-with-size/button-icon-with-size';
import { SvgCloseIcon } from '@shared/ui/icons/components/svg-close-icon';

interface Props {
  isOpened: boolean;
  title: string;
  placeholder: string;
  onClose: () => void;
  dispatchAction: (title: string) => void;
}

export const CreateItemModalEntity = ({
  title,
  placeholder,
  isOpened,
  onClose,
  dispatchAction,
}: Props) => {
  return (
    <LayoutModal title={title} modalVisible={isOpened} closeModal={onClose}>
      <StyledModalTitleContainer>
        <StyledTitle>{title}</StyledTitle>
        <ButtonIconWithSize
          size={ButtonIconSize.extra_small}
          Icon={SvgCloseIcon}
          onPress={onClose}
        />
      </StyledModalTitleContainer>
      <StyledModalFormContainer>
        <ModalForm
          placeholder={placeholder}
          onCloseModal={onClose}
          dispatchAction={(title: string) => dispatchAction(title)}
        />
      </StyledModalFormContainer>
    </LayoutModal>
  );
};

const StyledModalTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledModalFormContainer = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;

const StyledTitle = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.titleSemibold_28};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}
`;
