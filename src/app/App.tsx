import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {themes} from '@shared/ui/styles/themes';
import {BottomTab} from './navigation/navigators/bottom-tab/bottom-tab';

export const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={themes.default}>
        <BottomTab />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
