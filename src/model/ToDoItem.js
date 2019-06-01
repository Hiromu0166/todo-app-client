class ToDoItem {
    id = '';
    title = '';
    finished = false;

    constructor(title) {
        this.id = this.generateId();
        this.title = title;
    }

    generateId = () => {
        return new Date().getTime().toString(16) + Math.floor(1000 * Math.random()).toString(16);
    }
}

export default ToDoItem;