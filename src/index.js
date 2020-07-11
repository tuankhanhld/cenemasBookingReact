import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
  } from 'react-native';
  
import 'react-native-gesture-handler';
import LoginComponent from './features/authen/screens/login';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import SignUpComponent from './features/authen/screens/signup';
import { NAVIGATION_SCREENS } from './core/enums/navigation-screens.enum';
import { AuthenticationStack } from './navigation/navigation';

const Stack = createStackNavigator();

class AppContainer extends React.Component{
    render(){
        return(
            <>
                <StatusBar backgroundColor = "#E81667" />
                <View style = {styles.container}>
                <AuthenticationStack></AuthenticationStack>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AppContainer