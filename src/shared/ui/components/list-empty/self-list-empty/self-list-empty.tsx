import styled, { css } from 'styled-components/native';

import { selfListEmptyMessage } from '@shared/constants/list-empty-messages/list-empty-messages';
import { SvgArrowIcon } from '@shared/ui/icons/components/svg-arrow-icon';
import { SvgSketchIcon } from '@shared/ui/icons/components/svg-sketch-icon';

export const SelfListEmpty = () => {
  return (
    <StyledContainer>
      <SvgSketchIcon />
      <StyledText>{selfListEmptyMessage}</StyledText>
      <StyledWrapper>
        <SvgArrowIcon />
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 90px;
  justify-content: center;
  gap: 20px;
`;

const StyledWrapper = styled.View`
  padding-left: 65px;
`;

const StyledText = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.headlineRegular_18};
      color: ${props.theme.colors.grayscale_800};
    `;
  }};
`;
