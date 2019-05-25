import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class SignIn extends Component {
    render() {
        return (
            <View>
                <Text>Here is SignIn Screen</Text>
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
export default SignIn;