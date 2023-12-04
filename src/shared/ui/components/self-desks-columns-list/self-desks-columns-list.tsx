import { Swipeable } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { Columns } from '@shared/api/generated';
import { withNetworkState } from '@shared/helpers/with-network-state/with-network-state';

import { ButtonSize, DeleteButton } from '../buttons/delete-button/delete-button';
import { DataHandler } from '../data-handler';
import { SelfDeskCard } from '../self-desk-card';

const backgroundImageUrl = require('@shared/ui/assets/images/background-gradient-primary.png');

interface Props {
  deskId: number;
  data?: Columns[] | null;
  fetchMore?: (afterCursor?: string) => void;
  onPress?: (id: number, title: string) => void;
  onDeleteAction?: (columnId: number) => void;
}

interface ItemSwipeProps {
  deskId: number;
  item: any;
  onColumnPress?: (id: number, title: string) => void;
  handleDeleteColumn?: () => void;
}

const ItemSwipe = ({ deskId, item, handleDeleteColumn, onColumnPress }: ItemSwipeProps) => {
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
      <SelfDeskCard
        key={item.id}
        id={item.id}
        deskId={deskId}
        title={item.title}
        onPress={() => onColumnPress?.(item.id, item.title)}
      />
    </Swipeable>
  );
};

export const UISelfDeskColumnsList = withNetworkState(
  ({ deskId, data, fetchMore, onPress, onDeleteAction }: Props) => {
    return (
      <DataHandler data={data} isSelf>
        <StyledBackgroudImage
          source={backgroundImageUrl}
          imageStyle={imageStyle}
          resizeMode="cover"
        >
          <StyledDesksContainer
            contentContainerStyle={scrollViewStyle}
            data={data}
            renderItem={({ item }) => (
              <ItemSwipe
                deskId={deskId}
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
        </StyledBackgroudImage>
      </DataHandler>
    );
  },
);

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
