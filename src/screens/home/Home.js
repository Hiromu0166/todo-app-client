import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

class Home extends Component {

    static navigationOptions = ( {navigation} ) => ({
        title: 'INBOX',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerLeft: null,
        headerRight:
            <Icon
                name='exit-to-app'
                color='white'
                size={30}
                containerStyle={[{marginRight: 10}]}
                onPress={() => {navigation.navigate('SignInScreen')}}
            />
    });

    render() {
        return (
            <View>
                <Text>Here is Home Screen</Text>
            </View>
        );
    }
}

export default Home;