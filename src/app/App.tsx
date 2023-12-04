import { PortalProvider } from '@gorhom/portal';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components/native';

import { persistor, store } from '@shared/store';
import { themes } from '@shared/ui/styles/themes';

import { AppNavigator } from './navigation/navigators/app/app';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ThemeProvider theme={themes.default}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <PortalProvider>
                <AppNavigator />
              </PortalProvider>
            </GestureHandlerRootView>
          </ThemeProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
