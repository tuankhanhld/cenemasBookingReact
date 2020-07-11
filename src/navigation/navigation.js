import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from '../features/authen/screens/login';
import SignUpComponent from '../features/authen/screens/signup';
import { NAVIGATION_SCREENS } from '../core/enums/navigation-screens.enum';

const Stack = createStackNavigator();

export const AuthenticationStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name={NAVIGATION_SCREENS.loginScreen}
                component={LoginComponent}
                options={
                    {title: 'Login',
                    headerShown: false}
                }
            />
            <Stack.Screen 
                name={NAVIGATION_SCREENS.signinScreen}
                component={SignUpComponent} 
                options={
                    {title: 'Login',
                    headerShown: false}
                }
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};