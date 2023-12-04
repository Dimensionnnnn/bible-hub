import styled, { css } from 'styled-components/native';

import { ButtonIcon } from '../../../shared/ui/components/buttons/button-icon/button-icon';
import { SvgExitIcon } from '../../../shared/ui/icons/components/svg-exit-icon';

interface Props {
  title: string;
  onLogout: () => void;
}

export const PrimaryHeader = ({ title, onLogout }: Props) => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderTitle>{title}</StyledHeaderTitle>
      <ButtonIcon Icon={SvgExitIcon} onPress={onLogout} />
    </StyledHeaderContainer>
  );
};

const StyledHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 24px 16px;
`;

const StyledHeaderTitle = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.titleSemibold_28};
      color: ${props.theme.colors.grayscale_800};
    `;
  }};
`;
