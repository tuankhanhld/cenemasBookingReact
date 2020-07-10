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
import LoginComponent from './features/authen/components/login';

class appContainer extends React.Component{
    render(){
        return(
            <>
                <StatusBar backgroundColor = "#E81667" />
                <View style = {styles.container}>
                    <LoginComponent></LoginComponent>
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

export default appContainer