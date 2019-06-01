import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, Icon } from 'react-native-elements';

class ToDoItemList extends Component {

    renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            bottomDivider={true}
            rightIcon={
                <Icon
                    name="done"
                    size={ 30 }
                    color='#1c388c'
                />
            }
        />
    );
    
    render() {
        return(
            <FlatList
                keyExtractor = {(item, index) => item.id}
                data = { this.props.toDoItems }
                renderItem={this.renderItem}
            />
        );
    }
}

ToDoItemList.prototypes = {
    toDoItems: PropTypes.array,
};

export default ToDoItemList;