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

    @action
    finishToDoItem = ( id ) => {
        this.toDoItems = this.toDoItems.filter(item => item.id !== id);
    }

    @action
    updateToDoItem = ( id, updateTitle) => {
        const targetIndex = this.toDoItems.findIndex((element) => {
            return id === element.id;
        });
        const updateToDoItem = this.toDoItems[targetIndex];
        updateToDoItem.title = updateTitle;
        this.toDoItems.splice(targetIndex, 1, updateToDoItem);
    }

}

export default ToDoItemStore;