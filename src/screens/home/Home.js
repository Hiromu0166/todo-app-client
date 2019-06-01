import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import ToDoItemList from '../../component/ToDoItemList';
import ToDoItemUpdateModal from '../../component/ToDoItemUpdateModal';


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
            <View style={ styles.container }>
                <ToDoItemUpdateModal/>
                <ToDoItemList/>
                <Icon
                    name="add-circle"
                    size={60}
                    color='#1c388c'
                    containerStyle={[{position: 'absolute', bottom: 30, right: 45}]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Home;