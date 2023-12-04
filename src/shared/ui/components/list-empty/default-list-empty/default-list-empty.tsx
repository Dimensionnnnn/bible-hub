import styled, { css } from 'styled-components/native';

import { listEmptyMessages } from '@shared/constants/list-empty-messages/list-empty-messages';
import { SvgSeacrhIcon } from '@shared/ui/icons/components/svg-search-icon';

export const DefaultListEmpty = () => {
  return (
    <StyledContainer>
      <SvgSeacrhIcon />
      <StyledText>{listEmptyMessages}</StyledText>
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
