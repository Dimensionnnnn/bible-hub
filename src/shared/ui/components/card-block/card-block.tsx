import styled, { css } from 'styled-components/native';

import { withLoadingSkeleton } from './card-block-hoc/card-block-hoc';

export interface Props {
  title?: string;
  content?: string | number;
}

export const UICardBlock = withLoadingSkeleton(({ title, content }: Props) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{content}</StyledContent>
    </>
  );
});

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
