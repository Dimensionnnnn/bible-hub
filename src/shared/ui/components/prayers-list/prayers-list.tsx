import { useNetInfo } from '@react-native-community/netinfo';
import styled from 'styled-components/native';

import { Prayers } from '@shared/api/generated';

import { DefaultListEmpty } from '../list-empty/default-list-empty';
import { NoNetwork } from '../list-empty/no-network';
import { UIPrayerCard } from '../prayer-card';

interface Props {
  data?: Prayers[] | null;
  onPress?: (id: number, title: string) => void;
}

export const UIPrayersList = ({ data, onPress }: Props) => {
  const netInfo = useNetInfo();

  if (!netInfo.isConnected) {
    return <NoNetwork />;
  }

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
};

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
