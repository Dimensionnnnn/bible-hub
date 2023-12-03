import { RouteProp, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';

import { RootRouteNames, RootStackParamList } from '@app/navigation/navigators/root/root';

import { SecondaryHeader } from '@widgets/layouts/secondary-header';

import { PrayersListEntity } from '@entities/prayers-list/prayers-by-column-id';

export const PrayersByColumnIdPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, RootRouteNames.PRAYERS_BY_COLUMN_ID>>();
  const { columnId, columnTitle } = route.params;

  return (
    <StyledContainer>
      <SecondaryHeader title={columnTitle} />
      <StyledContentContainer>
        <PrayersListEntity columnId={columnId} />
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.grayscale_200};
  position: relative;
`;

const StyledContentContainer = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 16px 0 14px;
`;
