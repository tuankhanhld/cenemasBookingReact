/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import loginComponent from './src/features/authen/components/login';
import appContainer from './src';

AppRegistry.registerComponent(appName, () => appContainer);
