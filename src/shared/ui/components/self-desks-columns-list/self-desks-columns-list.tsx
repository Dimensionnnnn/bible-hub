import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Columns } from '@shared/api/generated';

import { ButtonSize, DeleteButton } from '../buttons/delete-button/delete-button';
import { UIDeskCard } from '../desk-card';
import { SelfListEmpty } from '../list-empty/self-list-empty';

const backgroundImageUrl = require('@shared/ui/assets/images/background-gradient-primary.png');

interface Props {
  data?: Columns[] | null;
  fetchMore?: (afterCursor?: string) => void;
  onPress?: (id: number, title: string) => void;
  onDeleteAction?: (columnId: number) => void;
}

interface ItemSwipeProps {
  item: any;
  onColumnPress?: (id: number, title: string) => void;
  handleDeleteColumn?: () => void;
}

const ItemSwipe = ({ item, handleDeleteColumn, onColumnPress }: ItemSwipeProps) => {
  const renderRightActions = () => {
    return (
      <StyledDeleteButtonContainer>
        <DeleteButton size={ButtonSize.small} onPress={handleDeleteColumn} />
      </StyledDeleteButtonContainer>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      dragOffsetFromRightEdge={5}
      onSwipeableOpen={handleDeleteColumn}
    >
      <UIDeskCard
        key={item.id}
        title={item.title}
        onPress={() => onColumnPress?.(item.id, item.title)}
      />
    </Swipeable>
  );
};

export const UISelfDeskColumnsList = ({ data, fetchMore, onPress, onDeleteAction }: Props) => {
  if (!data || data.length === 0) {
    return <SelfListEmpty />;
  }
  return (
    <StyledBackgroudImage source={backgroundImageUrl} imageStyle={imageStyle} resizeMode="cover">
      <GestureHandlerRootView style={{ width: '100%' }}>
        <StyledDesksContainer
          contentContainerStyle={scrollViewStyle}
          data={data}
          renderItem={({ item }) => (
            <ItemSwipe
              item={item}
              handleDeleteColumn={() => {
                onDeleteAction?.(item.id);
              }}
              onColumnPress={() => {
                onPress?.(item.id, item.title);
              }}
            />
          )}
          keyExtractor={(item) => item.id}
          onEndReached={() => fetchMore?.()}
          onEndReachedThreshold={0.1}
        />
      </GestureHandlerRootView>
    </StyledBackgroudImage>
  );
};

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

const StyledDeleteButtonContainer = styled.View`
  width: 76px;
  margin-left: -52px;
`;
