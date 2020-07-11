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
import { Dimensions } from 'react-native';
import LoginForm from '../components/loginForm';
import { NAVIGATION_SCREENS } from '../../../core/enums/navigation-screens.enum';

class LoginComponent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {navigation} = this.props
      return (
        <View style = { styles.contentContainer }>
          <View style = { styles.topLogo}>
            <Image
                source={require('assets/images/app-logo.png')} />
            </View>
          <View style = { styles.topTitle}>
            <View style={ styles.titleHolder }>
              <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>Welcome Buddies,</Text>
              <Text style={{ fontSize: 13, color: "white" }}> Login to book your seat, I said its your seat</Text>
            </View>
          </View>
          <View style = { styles.bodyForm}>
            <LoginForm></LoginForm>
          </View>
          <View style = { styles.footer}>
            <Text style={{ fontSize: 15, color: "white", marginBottom: 10 }}> Don’t have an account ? 
            <Text onPress={() => {
                navigation.navigate(NAVIGATION_SCREENS.signinScreen)
            }}>Sign up</Text> here.</Text>
          </View>
        </View>
        );
  }
}
let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    contentContainer: {
      paddingLeft: 16,
      paddingRight: 16,
      height: ScreenHeight + 50,
      backgroundColor: "#E81667"
    },
    topLogo: {
        flex: 15,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    topTitle: {
      flex: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    titleHolder: {
      color: "white",
      flex: 1, 
      flexDirection: "column", 
      justifyContent: "center",
      alignItems: "center"
    }, 
    bodyForm: {
      flex: 50,
      justifyContent: "center",
      backgroundColor: "cyan",
      borderRadius: 20,
      backgroundColor: "white"
    },
    footer: {
      flex: 20,
      justifyContent: "flex-end",
      alignItems: "center",
      paddingBottom: 5
    }
})

export default LoginComponent;