import { Desks } from '@api/generated';
import styled from 'styled-components/native';

import { UIDeskCard } from '../desk-card';

interface Props {
  data?: Desks[] | null;
  fetchMore?: (afterCursor?: string) => void;
  onPress?: (id: number) => void;
}

const backgroundImageUrl = require('@shared/ui/assets/images/background-gradient-primary.png');

export const UIDesksList = ({ data, fetchMore, onPress }: Props) => {
  return (
    <StyledBackgroudImage source={backgroundImageUrl} imageStyle={imageStyle} resizeMode="cover">
      <StyledDesksContainer
        contentContainerStyle={scrollViewStyle}
        data={data}
        renderItem={({ item }) => (
          <UIDeskCard key={item.id} title={item.name} onPress={() => onPress && onPress(item.id)} />
        )}
        keyExtractor={(item) => item.id}
        onEndReached={() => fetchMore && fetchMore()}
        onEndReachedThreshold={0.1}
      />
    </StyledBackgroudImage>
  );
};

const StyledBackgroudImage = styled.ImageBackground`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
`;

const imageStyle = {
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
};

const StyledDesksContainer = styled.FlatList`
  width: 100%;
  padding: 0 16px 0 14px;
`;

const scrollViewStyle = {
  rowGap: 12,
};
