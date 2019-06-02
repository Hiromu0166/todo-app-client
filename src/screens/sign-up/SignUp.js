import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import InputFieldWithIcon from '../../component/InputFieldWithIcon';

class SignUp extends Component {

    static navigationOptions = ( {navigation} ) => ({
        headerRight: null,
        headerLeft: 
            <Icon 
                name='arrow-back'
                color='white'
                size={35}
                containerStyle={[{marginLeft: 10}]}
                onPress={() => {navigation.navigate('SignInScreen')}} 
            />,
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textArea}>
                    <Text style={styles.text}>SIGN UP</Text>
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
                <InputFieldWithIcon
                    fieldName='RE-TYPE PASSWORD'
                    iconName='vpn-key'
                    secureTextEntry={true}
                />
                <Button
                    title="REGISTER"
                    buttonStyle={styles.button}
                    containerStyle={[{margin: 50}]}
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

export default SignUp;