import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabBar, Tab} from '@shared/ui/bottom-tabbar/bottom-tabbar';
import {
  TabBarIconsNames,
  getTabBarIcon,
} from '@shared/helpers/tab-bar-icons/tab-bar-icon';
import {Page} from '@pages/test-page/test-page';
import {UIKit} from '@pages/ui-kit/ui-kit';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabBar>
        <Tab.Screen
          name={TabBarIconsNames.MY_DESK}
          component={Page}
          options={({route}) => ({
            tabBarLabel: TabBarIconsNames.MY_DESK,
            tabBarIcon: ({color}) => getTabBarIcon(route.name, color),
          })}
        />
        <Tab.Screen
          name={TabBarIconsNames.USERS_DESKS}
          component={Page}
          options={({route}) => ({
            tabBarLabel: TabBarIconsNames.USERS_DESKS,
            tabBarIcon: ({color}) => getTabBarIcon(route.name, color),
          })}
        />
        <Tab.Screen
          name={TabBarIconsNames.FOLLOWED}
          component={Page}
          options={({route}) => ({
            tabBarLabel: TabBarIconsNames.FOLLOWED,
            tabBarIcon: ({color}) => getTabBarIcon(route.name, color),
          })}
        />
        <Tab.Screen
          name={TabBarIconsNames.UI_KIT}
          component={UIKit}
          options={({route}) => ({
            tabBarLabel: TabBarIconsNames.UI_KIT,
            tabBarIcon: ({color}) => getTabBarIcon(route.name, color),
          })}
        />
      </BottomTabBar>
    </NavigationContainer>
  );
};

export default App;
