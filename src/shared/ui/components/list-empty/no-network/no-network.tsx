import styled, { css } from 'styled-components/native';

import { noNetworkMessage } from '@shared/constants/list-empty-messages/list-empty-messages';
import { SvgNoNetworkIcon } from '@shared/ui/icons/components/svg-no-network-icon';

export const NoNetwork = () => {
  return (
    <StyledContainer>
      <SvgNoNetworkIcon />
      <StyledText>{noNetworkMessage}</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 125px;
  justify-content: center;
  gap: 20px;
`;

const StyledText = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.headlineRegular_18};
      color: ${props.theme.colors.grayscale_800};
    `;
  }};
`;
