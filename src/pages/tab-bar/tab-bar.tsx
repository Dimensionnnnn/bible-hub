import { FollowedPage } from '@pages/followed';
import { SelfDeskPage } from '@pages/self-desk/self-desk';
import { UIKit } from '@pages/ui-kit/ui-kit';
import { UsersDeskPage } from '@pages/users-desks/users-desks/users-desks';

import { TabBarIconsNames, getTabBarIcon } from '@shared/helpers/tab-bar-icons/tab-bar-icon';
import { BottomTabBar, Tab } from '@shared/ui/components/bottom-tabbar/bottom-tabbar';

export const TabBar = () => {
  return (
    <BottomTabBar>
      <Tab.Screen
        name={TabBarIconsNames.MY_DESK}
        component={SelfDeskPage}
        options={({ route }) => ({
          tabBarLabel: TabBarIconsNames.MY_DESK,
          tabBarIcon: ({ color }) => getTabBarIcon(route.name, color),
        })}
      />
      <Tab.Screen
        name={TabBarIconsNames.USERS_DESKS}
        component={UsersDeskPage}
        options={({ route }) => ({
          tabBarLabel: TabBarIconsNames.USERS_DESKS,
          tabBarIcon: ({ color }) => getTabBarIcon(route.name, color),
        })}
      />
      <Tab.Screen
        name={TabBarIconsNames.FOLLOWED}
        component={FollowedPage}
        options={({ route }) => ({
          tabBarLabel: TabBarIconsNames.FOLLOWED,
          tabBarIcon: ({ color }) => getTabBarIcon(route.name, color),
        })}
      />
      <Tab.Screen
        name={TabBarIconsNames.UI_KIT}
        component={UIKit}
        options={({ route }) => ({
          tabBarLabel: TabBarIconsNames.UI_KIT,
          tabBarIcon: ({ color }) => getTabBarIcon(route.name, color),
        })}
      />
    </BottomTabBar>
  );
};
