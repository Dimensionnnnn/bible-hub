import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInPage } from '@pages/auth/sign-in';
import { SignUpPage } from '@pages/auth/sign-up/sign-up';

const Stack = createNativeStackNavigator();

export type GuestStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export enum RouteNames {
  SIGNIN = 'SignIn',
  SIGNUP = 'SignUp',
}

export const GuestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name={RouteNames.SIGNUP}
          component={SignUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RouteNames.SIGNIN}
          component={SignInPage}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
