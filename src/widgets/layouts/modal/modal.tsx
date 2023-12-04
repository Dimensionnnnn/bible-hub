import { Modal, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  modalVisible: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
}

export const LayoutModal = ({ modalVisible, closeModal, children }: Props) => {
  if (!modalVisible) {
    return null;
  }

  return (
    <StyledContainer>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <StyledWrapper>
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <StyledModalContainer>{children}</StyledModalContainer>
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
