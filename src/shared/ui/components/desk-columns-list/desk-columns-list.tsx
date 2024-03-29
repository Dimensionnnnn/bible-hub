import styled from 'styled-components/native';

import { Columns } from '@shared/api/generated';
import { withNetworkState } from '@shared/helpers/with-network-state/with-network-state';

import { DataHandler } from '../data-handler';
import { UIDeskCard } from '../desk-card';

interface Props {
  data?: Columns[] | null;
  fetchMore?: (afterCursor?: string) => void;
  onPress?: (id: number, title: string) => void;
}

const backgroundImageUrl = require('@shared/ui/assets/images/background-gradient-primary.png');

export const UIDeskColumnsList = withNetworkState(({ data, fetchMore, onPress }: Props) => {
  return (
    <DataHandler data={data}>
      <StyledBackgroudImage source={backgroundImageUrl} imageStyle={imageStyle} resizeMode="cover">
        <StyledDesksContainer
          contentContainerStyle={scrollViewStyle}
          data={data}
          renderItem={({ item }) => (
            <UIDeskCard
              key={item.id}
              title={item.title}
              onPress={() => onPress?.(item.id, item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
          onEndReached={() => fetchMore?.()}
          onEndReachedThreshold={0.1}
        />
      </StyledBackgroudImage>
    </DataHandler>
  );
});

const StyledBackgroudImage = styled.ImageBackground`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const imageStyle = {
  borderRadius: 24,
};

const StyledDesksContainer = styled.FlatList`
  width: 100%;
  padding: 0 16px 0 14px;
`;

const scrollViewStyle = {
  rowGap: 12,
};
