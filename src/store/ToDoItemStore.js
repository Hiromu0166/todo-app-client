import ToDoItem from '../model/ToDoItem';
import { action, computed, observable } from 'mobx';

class ToDoItemStore {

    @observable toDoItems = [];

    @computed get toDoItemPlainArray() {
        return this.toDoItems.slice();
    }

    @action
    addToDoItem = ( title ) => {
        this.toDoItems = [...this.toDoItems, new ToDoItem(title)];
    }
}

export default ToDoItemStore;