import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

class SignIn extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textArea}>
                    <Text style={styles.text}>SIGN IN</Text>
                </View>
                <Button
                    title="Move to Home Screen"
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                    containerStyle={[{ margin: 5 }]}
                />
                <Button
                    title="Move to Sign Up Screen"
                    onPress={() => this.props.navigation.navigate('SignUpScreen')}
                    containerStyle={[{ margin: 5 }]}
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
    }
})

export default SignIn;