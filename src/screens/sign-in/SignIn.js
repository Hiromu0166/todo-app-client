import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import firebase from 'firebase';
import InputFieldWithIcon from '../../component/InputFieldWithIcon';
import UserInfo from '../../model/UserInfo';

class SignIn extends Component {

    userInfo = new UserInfo();

    onPressSignIn = async () => {
        const { email, password } = this.userInfo;
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            this.props.navigation.navigate('HomeScreen')
        } catch(e) {
            alert(e.message)
        } finally {
            this.userInfo.reset();
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textArea}>
                    <Text style={styles.text}>SIGN IN</Text>
                </View>
                <InputFieldWithIcon
                    fieldName='MAIL ADDRESS'
                    iconName='email'
                    onChangeText={ (email) => this.userInfo.email = email }
                />
                <InputFieldWithIcon
                    fieldName='PASSWORD'
                    iconName='vpn-key'
                    secureTextEntry={true}
                    onChangeText={ (password) => this.userInfo.password = password }
                />
                <Button
                    title="SIGN IN"
                    buttonStyle={styles.button}
                    containerStyle={[{margin: 50}]}
                    onPress={() => this.onPressSignIn()}
                />
                <Button
                    title="SIGN UP"
                    buttonStyle={styles.button}
                    containerStyle={[{marginHorizontal: 50}]}
                    onPress={() => this.props.navigation.navigate('SignUpScreen')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textArea: {
        alignItems: 'center',
        padding: 15,
    },
    text: {
        fontSize: 25,
    },
    button: {
        backgroundColor: '#1c388c',
        height: 60,
        borderRadius: 10
    }
})

export default SignIn;