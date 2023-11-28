import styled, { css } from 'styled-components/native';

import { Comments } from '@shared/api/generated';

import { UIComment } from '../comment';

interface Props {
  data?: Comments[] | null;
  fetchMore?: (afterCursor?: string) => void;
}

export const UICommentsList = ({ data, fetchMore }: Props = {}) => {
  return (
    <>
      <StyledCommentsHeader>Comments</StyledCommentsHeader>
      {data && (
        <StyledContainer
          data={data}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <UIComment
              key={item.id}
              authorName={item.authorName}
              dateOfCreation={item.createdAt}
              commentText={item.body}
            />
          )}
          keyExtractor={(item) => item.id}
          onEndReached={() => fetchMore && fetchMore()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
};

const StyledContainer = styled.FlatList`
  max-width: 343px;
  width: 100%;
  gap: 12px;
`;

const StyledCommentsHeader = styled.Text`
  ${(props) => {
    return css`
      ${props.theme.typography.headlineMedium_18};
      color: ${props.theme.colors.grayscale_800};
      padding-top: 20px;
    `;
  }};
`;
