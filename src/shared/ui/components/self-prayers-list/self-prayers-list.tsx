import Swipeable from 'react-native-gesture-handler/Swipeable';
import styled from 'styled-components/native';

import { Prayers } from '@shared/api/generated';
import { withNetworkState } from '@shared/helpers/with-network-state/with-network-state';

import { ButtonSize, DeleteButton } from '../buttons/delete-button/delete-button';
import { SelfListEmpty } from '../list-empty/self-list-empty';
import { SelfPrayerCard } from '../self-prayer-card';

interface Props {
  data?: Prayers[] | null;
  onPress?: (id: number, title: string) => void;
  onDeleteAction?: (columnId: number, prayerId: number) => void;
}

interface ItemSwipeProps {
  item: any;
  onCardPress?: (id: number, title: string) => void;
  handleDeletePrayer?: () => void;
}

const ItemSwipe = ({ item, handleDeletePrayer, onCardPress }: ItemSwipeProps) => {
  const renderRightActions = () => {
    return (
      <StyledDeleteButtonContainer>
        <DeleteButton size={ButtonSize.medium} onPress={handleDeletePrayer} />
      </StyledDeleteButtonContainer>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      dragOffsetFromRightEdge={5}
      onSwipeableOpen={handleDeletePrayer}
    >
      <SelfPrayerCard
        key={item.id}
        prayerId={item.id}
        columnId={item.columnId}
        title={item.title}
        membersCount={item.subscribersCount}
        completedCount={item.completesCount}
        dateOfCompletion={item.lastPrayerEvent}
        onCardPress={() => onCardPress?.(item.id, item.title)}
        onCompletePress={() => {}}
      />
    </Swipeable>
  );
};

export const UISelfPrayersList = withNetworkState(({ data, onPress, onDeleteAction }: Props) => {
  return (
    <StyledContainer>
      <StyledPrayersContainer
        contentContainerStyle={scrollViewStyle}
        data={data}
        renderItem={({ item }) => (
          <ItemSwipe
            item={item}
            handleDeletePrayer={() => {
              onDeleteAction?.(item.columnId, item.id);
            }}
            onCardPress={onPress}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <SelfListEmpty />}
      />
    </StyledContainer>
  );
});

const StyledContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
`;

const StyledPrayersContainer = styled.FlatList`
  width: 100%;
  padding: 0 16px 0 14px;
`;

const StyledDeleteButtonContainer = styled.View`
  width: 76px;
  margin-left: -25px;
`;

const scrollViewStyle = {
  rowGap: 12,
};
