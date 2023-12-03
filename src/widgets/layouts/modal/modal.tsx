import { Modal, TouchableWithoutFeedback } from 'react-native';
import styled, { css } from 'styled-components/native';

import {
  ButtonSize as ButtonIconSize,
  ButtonIconWithSize,
} from '@shared/ui/components/buttons/button-icon-with-size/button-icon-with-size';
import { SvgCloseIcon } from '@shared/ui/icons/components/svg-close-icon';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  type: ModalType;
  children?: React.ReactNode;
}

export enum ModalType {
  COLUMN = 'column',
  PRAYER = 'prayer',
}

const ModalTitles = {
  [ModalType.COLUMN]: 'New column',
  [ModalType.PRAYER]: 'New prayer',
};

export const ModalPlaceholders = {
  [ModalType.COLUMN]: 'Enter title of column',
  [ModalType.PRAYER]: 'Enter title of prayer',
};

export const LayoutModal = ({ modalVisible, closeModal, type, children }: Props) => {
  if (!modalVisible) {
    return null;
  }

  return (
    <StyledContainer>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          closeModal();
        }}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <StyledWrapper>
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <StyledModalContainer>
                <StyledModalTitleContainer>
                  <StyledTitle>{ModalTitles[type]}</StyledTitle>
                  <ButtonIconWithSize
                    size={ButtonIconSize.extra_small}
                    Icon={SvgCloseIcon}
                    onPress={closeModal}
                  />
                </StyledModalTitleContainer>
                <StyledModalFormContainer>{children}</StyledModalFormContainer>
              </StyledModalContainer>
            </TouchableWithoutFeedback>
          </StyledWrapper>
        </TouchableWithoutFeedback>
      </Modal>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const StyledWrapper = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(42, 42, 42, 0.8);
`;

const StyledModalContainer = styled.View`
  width: 100%;
  max-width: 343px;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px 40px 24px;
  border-radius: 28px;
  gap: 28px;
  background-color: ${(props) => props.theme.colors.grayscale_100};
`;

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
