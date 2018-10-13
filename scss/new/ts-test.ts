var doc = document;
const clickEvent = 'click';
var listId:number = 0;
var taskId :number= 0;
class toDo  {
  id: number;
  name :String ;
  isImportant: Boolean;
  isChecked: Boolean;
  note: Boolean;
  dueDate: Boolean;
  addtoDay: Boolean;
  constructor(id,name,isImportant,isChecked,note,dueDate,addtoDay){
    this.id = id;
    this.name = name;
    this.isImportant = isImportant;
    this.isChecked = isChecked;
    this.note = note;
    this.dueDate = dueDate;
    this.addtoDay = addtoDay;
  }
}

class myList  {
  id: number;
  name: String;
  numberofTasks: number;
  active: Boolean;
  listOfTodo: [];
  constructor(id,name,numberofTasks,active,listOfTodo){
    this.id = id;
    this.name = name;
    this.numberofTasks = numberofTasks;
    this.active = active;
    this.listOfTodo = listOfTodo;
  }
};
var allList = [];
