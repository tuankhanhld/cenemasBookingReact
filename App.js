/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppContainer from './src';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isFlashScreen: true
    }
    setTimeout(() => {
      this.setState(() => {
        return {isFlashScreen: false}
      })
    }, 1000);
  }
  render(){
    return (
      this.state.isFlashScreen ? 
      <>
        <StatusBar backgroundColor = "#E81667" />
        <View style = { styles.bookingTitle}>
            <Image
              source={require('./assets/images/app-logo.png')} />
        </View>
      </> : <AppContainer></AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  statusBar: {
    backgroundColor: "#E81667",
  },
  bookingTitle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#E81667",
  },
  appLogo: {
    width: 40,
    height: 40
  }
});

export default App;
