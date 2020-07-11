import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Button,
    TouchableOpacity
  } from 'react-native';


export default class LoginForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style = { styles.formContainer }>
                <View style={ styles.loginFormTitle }>
                    <Text style={{ fontSize: 18,fontWeight: "bold", color: "#E81667" }}>
                        Login to your account
                    </Text>
                </View>
                <View style={ styles.inputGroup }>
                    <TextInput placeholder="User Name" style={styles.textInput}></TextInput>
                    <TextInput placeholder="Password" style={styles.textInput}></TextInput>
                    <Text style={{ alignSelf: "flex-end", fontWeight: "bold" }}>Forgot Password ?</Text>
                </View>
                <View style={ styles.buttonSubmitContainer }>
                    <TouchableOpacity style={ styles.loginBtn } >
                        <Text style={ [styles.standarText, { fontSize: 20 }] }> LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.otherLoginContainer }>
                    <View style={ styles.orContainer }>
                        <View style={{ height: 1, width: 150, backgroundColor: "#959595" }}></View>
                        <Text> OR </Text>
                        <View style={{ height: 1, width: 150, backgroundColor: "#959595" }}></View>
                    </View>
                    <View style={{ flex: 1, 
                        flexDirection: "row", 
                        justifyContent: "space-between", 
                        paddingTop: 20 }}>
                        <View style={ [styles.loginOtherBtn, { paddingRight: 10}] }>
                            <TouchableOpacity style={ [styles.btnIcon, { backgroundColor: "#FFF1F0", borderColor: "#F14336"}]}>
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                                    <Image
                                        source={require('assets/images/google_ic.png')} />
                                    <Text style={{ marginLeft: 10, fontWeight: "bold" }}>Google</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={ [styles.loginOtherBtn, {paddingLeft: 10}] }>
                            <TouchableOpacity style={[, styles.btnIcon, { backgroundColor: "#FFF1F0", borderColor: "#3164CE"}]}>
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                                    <Image
                                        source={require('assets/images/facebook_ic.png')} />
                                    <Text style={{ marginLeft: 10, fontWeight: "bold" }}>Facebook</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        padding: 16
    },
    loginFormTitle: {

    },
    inputGroup: {
        marginTop: 20,
        marginBottom: 20
    },
    buttonSubmitContainer: {
        marginBottom: 20
    },
    otherLoginContainer: {

    },
    textInput: {
        height: 60,
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 5,
        borderWidth: 0,
        backgroundColor: "#F4F4F4",
        padding: 10,
        fontSize: 16
    },
    standarText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold"
    },  
    loginBtn: {
        borderRadius: 5,
        height: 60,
        backgroundColor: "#E81667",
        justifyContent: "center",
        alignItems: "center"
    },
    orContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    loginOtherBtn: {
        flex: 50
    },
    btnIcon: {
        height: 50,  
        borderWidth: 0.5, 
        borderRadius: 5, 
        justifyContent: "center", 
        padding: 10
    }

})