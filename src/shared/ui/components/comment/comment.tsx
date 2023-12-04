import styled, { css } from 'styled-components/native';

interface Props {
  authorName?: string;
  dateOfCreation?: string;
  commentText?: string;
}

export const UIComment = ({ authorName, dateOfCreation, commentText }: Props) => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledAuthorName>{authorName || 'Anonymous'}</StyledAuthorName>
        <StyledDateOfCreation>{dateOfCreation}</StyledDateOfCreation>
      </StyledHeader>
      <StyledCommentText>{commentText}</StyledCommentText>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  max-width: 343px;
  width: 100%;
  gap: 12px;
  padding: 16px;
`;

const StyledHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledAuthorName = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.bodyMedium_16};
      color: ${props.theme.colors.grayscale_800};
    `;
  }}
`;

const StyledDateOfCreation = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.bodyRegular_14};
      color: ${props.theme.colors.grayscale_700};
    `;
  }}
`;

const StyledCommentText = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.bodyRegular_16};
      color: ${props.theme.colors.grayscale_800};
      padding-bottom: 12px;
    `;
  }}
`;
