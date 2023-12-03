import styled from 'styled-components/native';

import { Prayers } from '@shared/api/generated';
import { withNoNetwork } from '@shared/helpers/with-no-network/with-no-network';

import { DefaultListEmpty } from '../list-empty/default-list-empty';
import { UIPrayerCard } from '../prayer-card';

interface Props {
  data?: Prayers[] | null;
  onPress?: (id: number, title: string) => void;
}

export const UIPrayersList = withNoNetwork(({ data, onPress }: Props) => {
  return (
    <StyledContainer>
      <StyledPrayersContainer
        contentContainerStyle={scrollViewStyle}
        data={data}
        renderItem={({ item }) => (
          <UIPrayerCard
            key={item.id}
            title={item.title}
            membersCount={item.subscribersCount}
            completedCount={item.completesCount}
            dateOfCompletion={item.lastPrayerEvent}
            onCardPress={() => {
              onPress?.(item.id, item.title);
            }}
            onCompletePress={() => {}}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <DefaultListEmpty />}
      />
    </StyledContainer>
  );
});

const StyledContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
`;

const StyledPrayersContainer = styled.FlatList`
  width: 100%;
  padding: 0 16px 0 14px;
`;

const scrollViewStyle = {
  rowGap: 12,
};
