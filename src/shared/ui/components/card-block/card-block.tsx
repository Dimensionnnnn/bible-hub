import styled, { css } from 'styled-components/native';

import { UISkeleton } from '../skeleton';

interface Props {
  title?: string;
  content?: string | number;
  isLoading?: boolean;
}

export const UICardBlock = ({ title, content, isLoading }: Props) => {
  return (
    <StyledContainer>
      {isLoading ? (
        <UISkeleton />
      ) : (
        <>
          <StyledTitle>{title}</StyledTitle>
          <StyledContent>{content}</StyledContent>
        </>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  max-width: 149.5px;
  width: 100%;
  height: 109px;
  border-radius: 28px;
  background-color: ${(props) => props.theme.colors.grayscale_100};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.headlineRegular_18};
      color: ${props.theme.colors.grayscale_700};
      padding-top: 24px;
    `;
  }};
`;

const StyledContent = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.headlineSemibold_20};
      color: ${props.theme.colors.grayscale_800};
      padding-bottom: 24px;
    `;
  }}
`;
