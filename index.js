/**
 * @format
 */
import { AppRegistry } from 'react-native';
import 'react-native-url-polyfill/auto';

import { name as appName } from './app.json';
import App from './src/app/App';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
