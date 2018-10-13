var doc = document;
var clickEvent = 'click';
var listId = 0;
var taskId = 0;
var toDo = /** @class */ (function () {
    function toDo(id, name, isImportant, isChecked, note, dueDate, addtoDay) {
        this.id = id;
        this.name = name;
        this.isImportant = isImportant;
        this.isChecked = isChecked;
        this.note = note;
        this.dueDate = dueDate;
        this.addtoDay = addtoDay;
    }
    return toDo;
}());
var myList = /** @class */ (function () {
    function myList(id, name, numberofTasks, active, listOfTodo) {
        this.id = id;
        this.name = name;
        this.numberofTasks = numberofTasks;
        this.active = active;
        this.listOfTodo = listOfTodo;
    }
    return myList;
}());
;
var allList = [];
