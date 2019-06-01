import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';


MOCK_DATA = [{title:'Buy shampoo'}, {title: 'Read a book'}, {title: 'Clean room'}, {title: 'Go city hall'}, {title: 'Thraw array tradh'}]; 

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
                keyExtractor = {(item, index) => item.title}
                data = { MOCK_DATA }
                renderItem={this.renderItem}
            />
        );
    }
}

export default ToDoItemList;