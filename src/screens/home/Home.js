import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Icon } from 'react-native-elements';
import ToDoItemList from '../../component/ToDoItemList';
import ToDoItemAddModal from '../../component/ToDoItemAddModal';
import ToDoItemUpdateModal from '../../component/ToDoItemUpdateModal';
import ToDoItemStore from '../../store/ToDoItemStore';

@observer
class Home extends Component {

    toDoItemStore;

    @observable isShowAddItemModal;

    @observable isShowUpdateItemModal;

    @observable selectedToDoItem;

    constructor() {
        super();
        this.toDoItemStore = new ToDoItemStore();
        this.isShowAddItemModal = false;
        this.isShowUpdateItemModal = false;
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

    selectToDoItem = ( item ) => {
        this.selectedToDoItem = item;
    }

    openUpdateToDoItemModal = () => {
        this.isShowUpdateItemModal = true;
    }

    closeUpdateItemModal = () => {
        this.isShowUpdateItemModal = false;
    }

    closeAddItemModal = () => {
        this.isShowAddItemModal = false;
    }

    render() {
        return (
            <View style={ styles.container }>
                <ToDoItemAddModal
                    isShow={ this.isShowAddItemModal }
                    closeModal={ this.closeAddItemModal }
                    addToDoItem={ this.toDoItemStore.addToDoItem }
                />
                <ToDoItemUpdateModal
                    isShow={ this.isShowUpdateItemModal}
                    closeModal={ this.closeUpdateItemModal }
                    selectedToDoItem={ this.selectedToDoItem }
                    updateToDoItem={ this.toDoItemStore.updateToDoItem}
                />
                <ToDoItemList
                    toDoItems={ this.toDoItemStore.toDoItemPlainArray }
                    finishToDoItem={ this.toDoItemStore.finishToDoItem}
                    openUpdateToDoItemModal={ this.openUpdateToDoItemModal }
                    selectToDoItem={ this.selectToDoItem }
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