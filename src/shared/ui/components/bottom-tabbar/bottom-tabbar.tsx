import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { getStyles } from './styles';

export const Tab = createBottomTabNavigator();

interface Props {
  children: React.ReactNode;
}

export const BottomTabBar: React.FC<Props> = ({ children }) => {
  const styles = getStyles();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: styles.inconColors.active,
        tabBarInactiveTintColor: styles.inconColors.inactive,
        tabBarStyle: [styles.containerColor, styles.container],
        tabBarLabelStyle: styles.fontLabel,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Group>{children}</Tab.Group>
    </Tab.Navigator>
  );
};
