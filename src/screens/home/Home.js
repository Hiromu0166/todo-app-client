import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import { Icon } from 'react-native-elements';
import ToDoItemList from '../../component/ToDoItemList';
import ToDoItemAddModal from '../../component/ToDoItemAddModal';
import ToDoItemStore from '../../store/ToDoItemStore';
import { observable } from 'mobx';

@observer
class Home extends Component {

    toDoItemStore;

    @observable isShowAddItemModal;

    constructor() {
        super();
        this.toDoItemStore = new ToDoItemStore();
        this.isShowAddItemModal = false;
    }

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
                size={ 30 }
                containerStyle={ [{marginRight: 10}] }
                onPress={ () => { navigation.navigate('SignInScreen') } }
            />
    });

    closeAddItemModal = () => {
        this.isShowAddItemModal = false;
    }

    render() {
        return (
            <View style={ styles.container }>
                <ToDoItemAddModal
                    isShow={ this.isShowAddItemModal }
                    addToDoItem={ this.toDoItemStore.addToDoItem }
                    closeModal={ this.closeAddItemModal }
                />
                <ToDoItemList
                    toDoItems={ this.toDoItemStore.toDoItemPlainArray }
                    finishToDoItem={ this.toDoItemStore.finishToDoItem}
                />
                <Icon
                    name="add-circle"
                    size={ 60 }
                    color='#1c388c'
                    containerStyle={ [{position: 'absolute', bottom: 30, right: 45}] }
                    onPress={ () => { this.isShowAddItemModal = true } }
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