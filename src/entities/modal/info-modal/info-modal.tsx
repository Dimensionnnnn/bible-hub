import styled, { css } from 'styled-components/native';

import { LayoutModal } from '@widgets/layouts/modal';

import {
  ButtonSize,
  PrimaryButton,
} from '@shared/ui/components/buttons/primary-button/primary-button';

interface Props {
  isOpened: boolean;
  title: string;
  text: string;
  onClose: () => void;
}

export const InfoModalEntity = ({ title, text, isOpened, onClose }: Props) => {
  return (
    <LayoutModal modalVisible={isOpened} closeModal={onClose}>
      <StyledModalContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{text}</StyledText>
        <PrimaryButton onPress={onClose} size={ButtonSize.medium} title="OK" />
      </StyledModalContainer>
    </LayoutModal>
  );
};

const StyledModalContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.titleSemibold_28};
      color: ${props.theme.colors.grayscale_800};
      padding-bottom: 12px;
    `;
  }}
`;

const StyledText = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.headlineRegular_18};
      color: #1f1f1f;
      text-align: center;
      padding-bottom: 24px;
      max-width: 250px;
    `;
  }}
`;
