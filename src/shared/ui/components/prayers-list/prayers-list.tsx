import styled from 'styled-components/native';

import { Prayers } from '@shared/api/generated';

import { UIPrayerCard } from '../prayer-card';

interface Props {
  data?: Prayers[] | null;
  onPress?: (id: number, title: string) => void;
}

export const UIPrayersList = ({ data, onPress }: Props) => {
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
      />
    </StyledContainer>
  );
};

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

const scrollViewStyle = {
  rowGap: 12,
};
