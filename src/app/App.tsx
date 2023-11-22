import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {themes} from '@shared/ui/styles/themes';
import {RootNavigation} from './navigation/navigators/root/root';

export const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={themes.default}>
        <RootNavigation />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
