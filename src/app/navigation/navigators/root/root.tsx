import { PortalHost } from '@gorhom/portal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DeskColumnsPage } from '@pages/desk-columns';
import { PrayerPage } from '@pages/prayer';
import { PrayersByColumnIdPage } from '@pages/prayers-by-column-id';
import { SelfPrayersPage } from '@pages/self-prayers';
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

type SelfPrayersRouteParams = {
  columnId: number;
  columnTitle: string;
};

type PrayerRouteParams = {
  prayerId: number;
  prayerTitle: string;
};

export type RootStackParamList = {
  [RootRouteNames.TAB_BAR]: undefined;
  [RootRouteNames.DESK_COLUMNS]: DeskColumnsRouteParams;
  [RootRouteNames.PRAYERS_BY_COLUMN_ID]: PrayersByColumnIdRouteParams;
  [RootRouteNames.SELF_PRAYERS]: SelfPrayersRouteParams;
  [RootRouteNames.PRAYER]: PrayerRouteParams;
};

export enum RootRouteNames {
  TAB_BAR = 'tab-bar',
  DESK_COLUMNS = 'desk-columns',
  PRAYERS_BY_COLUMN_ID = 'prayers-by-column-id',
  SELF_PRAYERS = 'self-prayers',
  PRAYER = 'prayer',
}

export const RootNavigator = () => {
  return (
    <>
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
          <Stack.Screen
            name={RootRouteNames.SELF_PRAYERS}
            component={SelfPrayersPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={RootRouteNames.PRAYER}
            component={PrayerPage}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
      <PortalHost name="card" />
    </>
  );
};
