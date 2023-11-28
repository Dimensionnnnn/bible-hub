import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DeskColumnsPage } from '@pages/desk-columns';
import { PrayersByColumnIdPage } from '@pages/prayers-by-column-id';
import { TabBar } from '@pages/tab-bar/tab-bar';

const Stack = createNativeStackNavigator();

type DeskColumnsRouteParams = {
  deskId: number;
  deskTitle: string;
};

type PrayersByColumnIdRouteParams = {
  columnId: number;
  columnTitle: string;
};

export type RootStackParamList = {
  [RootRouteNames.TAB_BAR]: undefined;
  [RootRouteNames.DESK_COLUMNS]: DeskColumnsRouteParams;
  [RootRouteNames.PRAYERS_BY_COLUMN_ID]: PrayersByColumnIdRouteParams;
};

export enum RootRouteNames {
  TAB_BAR = 'tab-bar',
  DESK_COLUMNS = 'desk-columns',
  PRAYERS_BY_COLUMN_ID = 'prayers-by-column-id',
}

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={RootRouteNames.TAB_BAR}
          component={TabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RootRouteNames.DESK_COLUMNS}
          component={DeskColumnsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RootRouteNames.PRAYERS_BY_COLUMN_ID}
          component={PrayersByColumnIdPage}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
