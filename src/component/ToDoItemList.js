import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, Icon } from 'react-native-elements';
import { observer } from 'mobx-react';

@observer
class ToDoItemList extends Component {

    onPressToDoItem = ( item ) => {
        this.props.selectToDoItem(item);
        this.props.openUpdateToDoItemModal();
    }

    renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            onPress={ () => this.onPressToDoItem(item) }
            bottomDivider={true}
            rightIcon={
                <Icon
                    name="done"
                    size={ 30 }
                    color='#1c388c'
                    onPress={ () => this.props.finishToDoItem(item.id)}
                />
            }
        />
    );
    
    render() {
        return(
            <FlatList
                keyExtractor = {(item, index) => item.id}
                data = { this.props.toDoItems }
                renderItem={ this.renderItem }
            />
        );
    }
}

ToDoItemList.prototypes = {
    openUpdateToDoItemModal: PropTypes.func,
    toDoItems: PropTypes.array,
    finishToDoItem: PropTypes.func,
    selectToDoItem: PropTypes.func,
};

export default ToDoItemList;