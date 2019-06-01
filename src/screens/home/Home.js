import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import ToDoItemList from '../../component/ToDoItemList';


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
                <ToDoItemList/>
            </View>
        );
    }
}

export default Home;