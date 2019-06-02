import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import InputFieldWithIcon from '../../component/InputFieldWithIcon';

class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textArea}>
                    <Text style={styles.text}>SIGN IN</Text>
                </View>
                <InputFieldWithIcon
                    fieldName='MAIL ADDRESS'
                    iconName='email'
                />
                <InputFieldWithIcon
                    fieldName='PASSWORD'
                    iconName='vpn-key'
                    secureTextEntry={true}
                />
                <Button
                    title="SIGN IN"
                    buttonStyle={styles.button}
                    containerStyle={[{margin: 50}]}
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
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