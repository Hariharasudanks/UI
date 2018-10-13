var doc = document;
var listId = 0;
var taskId = 0;
var toDo = {
  id: null,
  name: "Untitled",
  isImportant: false,
  isChecked: false,
  note: null,
  dueDate: null,
  addtoDay: false
}

var myList = {
  id: null,
  name: null,
  numberofTasks: null,
  active: false,
  listOfTodo: []
};
var allList = [];

function findTargetListIndex(event) {
  console.log(event.target);
  var target;

  if (event.target.classList.contains("list-item")) {

    target = event.target;
  } else {
    target = event.target.parentNode;
  }
  console.log(target);
  currentIndex = [].indexOf.call(doc.getElementsByClassName("list-item"), target);
  console.log("Current Index: " + currentIndex);
  showLists(currentIndex);
}

function getElementsByClass(className) {
  return doc.getElementsByClassName(className)[0];
}

function createElement(element) {
  var elementObj = document.createElement(element.name);
  if (element.attribute) {
    if (element.attribute.class) {
      elementObj.className = element.attribute.class;
    }
    if (element.attribute.data) {
      elementObj.innerText = element.attribute.data;
    }
    if (element.attribute.id) {
      elementObj.id = element.attribute.id;
    }
  }
  elementObj.addEventListener(element.attribute.eventAction, element.attribute.eventSuccessFunction, element.attribute.useCapture);
  if (element.attribute.parentElement != undefined) {
    element.attribute.parentElement.appendChild(element);
  }
  if (element.style) {
    if (element.style.cursor) {
      elementObj.style.cursor = element.style.cursor;
    }
  }
  return elementObj;
}


function ToDo(Myname) {
  var obj = Object.create(toDo);
  obj.name = Myname;
  obj.id = ++taskId;
  obj.isChecked = false;
  obj.isImportant = false;
  obj.note = null;
  obj.dueDate = null;
  obj.reminder = null;
  return obj;
}

function List(name, numberofTasks) {
  var obj = Object.create(myList);
  obj.id = ++listId;
  obj.name = name;
  obj.numberofTasks = numberofTasks;
  obj.listOfTodo = [];
  obj.active = false;
  return obj;

}
function createHTMLElement(elementName, className) {

  var htmlElement = document.createElement(elementName);
  htmlElement.className = className;
  return htmlElement;
}

function init() {
  var dateoneOne = getElementsByClass("dateoneOne");
  dateoneOne.addEventListener("focusout", addDateOne);

  var datetwoTwo = getElementsByClass("datetwoTwo");
  datetwoTwo.addEventListener("focusout", addDateTwo);
  var inputTask = getElementsByClass("input-text");
  inputTask.addEventListener("keydown", function e(e) {
    if (e.keyCode === 13) {
      addTask();
    }
  });

  var note = getElementsByClass("note");
  note.addEventListener("focusout", addNote);

  inputTask.addEventListener("input", showButton);
  var lists = getElementsByClass('list-item');
  for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', findTargetListIndex);
  }

  var button = getElementsByClass('fa-bars');
  button.addEventListener('click', toggleLeftSideBar);

  var back = getElementsByClass("fa-chevron-right");
  back.addEventListener('click', closeRightSlider);



  var addList = getElementsByClass('innerspan-input side-button');
  addList.addEventListener("keydown", function e(e) {
    if (e.keyCode === 13) {
      createList();
    }
  });

  /* var addlistDiv = doc.getElementsByClassName("add-task");
   for (let i= 0; i < addlistDiv.length; i++) {
     addlistDiv[i].addEventListener('click', add);
   }*/
  var reminder = getElementsByClass('dateTwo');
  reminder.addEventListener('click', enterReminder);

  var dueDate = getElementsByClass('dateOne');
  dueDate.addEventListener('click', enterDate);

  var deleteButton = getElementsByClass('delete');
  deleteButton.addEventListener("click", deleteTask);

  var addDay = getElementsByClass("right-top-content-two");
  addDay.addEventListener("click", addMyDay);
}

init();
function getListbyId(listId) {
  return allList[listId - 1];
}
function getTaskById(taskId) {
  for (let i = 0; i < list.listOfTodo.length; i++) {
    if (taskId === "task" + list.listOfTodo[i].id)
      task = list.listOfTodo[i];
  }
}

function addMyDay(e) {

}
function addDateOne(e) {
  var listId = findActivelist().id;
  var taskId = e.target.parentNode.id;
  var list = getListbyId(listId);
  var task;
  for (let i = 0; i < list.listOfTodo.length; i++) {
    if (taskId === "task" + list.listOfTodo[i].id)
      task = list.listOfTodo[i];
  }
  console.log(task);
  task.dueDate = getElementsByClass("dateoneOne").value;
  alert(task.dueDate);

  getElementsByClass("dateOne").innerHTML = task.dueDate;
  getElementsByClass("dateoneOne").toggle("dateoneOne-toggle");

  getElementsByClass("dateoneOne").style.display = "none";
}

function addDateTwo(e) {
  var listId = findActivelist().id;
  var taskId = e.target.parentNode.id;
  var list = getListbyId(listId);
  for (let i = 0; i < list.listOfTodo.length; i++) {
    if (taskId === "task" + list.listOfTodo[i].id)
      task = list.listOfTodo[i];
  }
  console.log(task);
  task.reminder = getElementsByClass("datetwoTwo").value;
  alert(task.reminder);
  getElementsByClass("dateTwo").innerHTML = task.reminder;
  getElementsByClass("datetwoTwo").style.display = "none";
}

function addNote(e) {
  var note = e.currentTarget.value;
  var listId = findActivelist().id;
  var taskId = e.target.parentNode.id;
  //alert("task ID: "+taskId);
  //  console.log(taskId);
  var list = getListbyId(listId);
  //  console.log("list is: "+list);
  for (let i = 0; i < list.listOfTodo.length; i++) {
    if (taskId === "task" + list.listOfTodo[i].id)
      task = list.listOfTodo[i];
    //alert("Task found");
  }
  task.note = note;
  console.log(task.note);

  //alert("Note is: "+ e.currentTarget.value);
}
function enterReminder(e) {
  getElementsByClass("datetwoTwo").style.display = "block";

}

function enterDate(e) {
  document.getElementsByClassName("dateoneOne")[0].classList.toggle("dateoneOne-toggle");
  //getElementsByClass("dateoneOne").style.display = "block";
}

function showButton(e) {
  getElementsByClass("add-class").style.display = "block";
}

function showListTasks(listObj) {
  console.log("List Obj: " + listObj);
  var mainList = getElementsByClass("ul");
  while (mainList.childNodes.length > 1) {
    mainList.removeChild(mainList.firstChild);
  }
  for (let i = 0; i < listObj.listOfTodo.length; i++) {
    var j = i + 1;
    var task = listObj.listOfTodo[i];
    console.log("Task is: " + task);
    newList = createHTMLElement("li", "item");
    newList.setAttribute("id", "task" + task.id);
    if (task.isChecked) {
      leftButton = createHTMLElement("button", "fa fa-check-circle listButton1");
    } else {
      leftButton = createHTMLElement("button", "fa fa-circle-thin listButton1");

    }
    content = createHTMLElement('span', 'span');
    newText = document.createTextNode(task.name);
    content.appendChild(newText);
    if (task.isImportant) {
      rightButton = createHTMLElement('button', 'fa fa-star  listButton2 right-float');
    } else {
      rightButton = createHTMLElement('button', 'fa fa-star-o  listButton2 right-float');
    }
    newList.appendChild(leftButton);
    newList.appendChild(content);
    newList.appendChild(rightButton);
    mainList.insertBefore(newList, mainList.lastChild);
    document.getElementsByClassName("add-class")[0].style.display = "none";
    newList.addEventListener('click', toggleRightSideBar, false);
    leftButton.addEventListener('click', enableClick, false);
    addInput.placeholder = "Add a Task";
    addInput.value = "";
    addButton.classList.toggle("fa-circle-thin");
    // var items = doc.getElementsByClassName("span");

    //for (var j = 0; j < items.length; j++) {
    //items[j].addEventListener('click', toggleRightSideBar, false);
    //}
  }

}

function showLists(e) {
  allList.forEach(task => {
    task.active = false;
  });
  closeRightSlider();
  //  alert(findTargetListIndex(e));
  //alert("showList fn..Index: "+e);
  var listObj = allList[e];

  //alert("List Name: "+list.name);
  console.log("List Obj" + listObj);
  var list = getElementsByClass("ul");
  listObj.active = true;
  getElementsByClass("heading").innerHTML = listObj.name;

  showListTasks(listObj);

  console.log("E is: " + e);
  console.log("ListObj: " + allList[e]);


}

function createList(e) {
  var ul = getElementsByClass("inner-ul");
  var input = getElementsByClass("innerspan-input");
  if (input.value.trim() === '' || input.value === "New List") {
    doc.getElementsByClassName("innerspan-input")[0].focus();
  }
  else {
    // alert(input.value);
    var listObj = List(input.value, 0);
    allList.push(listObj);
    console.log(allList);
    //   list.removeChild(list.lastChild);
    //({name:"button",attribute: {class:"fa fa-circle-thin"}});


    //  var li1 = createElement({name:"li",attribute:{class:"list-item",id:"list"+listObj.id,})
    var li1 = document.createElement("li");
    li1.classList.add("list-item");
    li1.setAttribute("id", "list" + listObj.id);
    li1.addEventListener("click", findTargetListIndex);
    ul.insertBefore(li1, ul.lastChild.previousSibling);
    li1.innerHTML = "<button class='fa fa-list-ul button-class'></button><span class='innerspan mylist-innerspan'>" + input.value + "</span>";
    getElementsByClass("fa-list-ul").addEventListener("click", findTargetListIndex);

    input.value = null;
    input.placeholder = "New List";
    /*var li = doc.createElement("li");
    list.appendChild(li);
    li.innerHTML = "<a href='#'><button class='fa fa-plus side-button button-class'></button></a><input class='innerspan-input' placeholder='New List'/>";*/
  }
  //list.appendChild("<li><a href='#'><button class='fa fa-plus side-button button-class'></button></a><input class='innerspan-input side button' placeholder='New List'/></li>");*/

}


function toggleRightSideBar(e) {
  var listId = findActivelist().id;
  var taskId = e.target.parentNode.id;
  //alert("task ID: "+taskId);
  //  console.log(taskId);
  var list = getListbyId(listId);
  //  console.log("list is: "+list);
  for (var i = 0; i < list.listOfTodo.length; i++) {
    if (taskId === "task" + list.listOfTodo[i].id)
      task = list.listOfTodo[i];
    //alert("Task found");
  }
  //var taskSelect = getElementsByClass('task-select');
  console.log("Task inside toggle is: " + task);
  console.log("about to toggle: taskIsChecked is: " + task.isChecked);
  if (task.isChecked) {

    var taskSelect = 'fa fa-check-circle task-select';

    // taskSelect.classList.replace("fa-circle-o","fa-check-circle");
  } else {
    taskSelect = 'fa fa-circle-o task-select';

  }
  if (task.isImportant) {

    var important = 'fa fa-star important';

    // taskSelect.classList.replace("fa-circle-o","fa-check-circle");
  } else {
    important = 'fa fa-star-o important';

  }
  if (task.reminder != null) {
    getElementsByClass("dateTwo").innerHTML = task.reminder;
  } else {
    getElementsByClass("dateTwo").innerHTML = "Remind Me";
  }

  if (task.dueDate != null) {
    getElementsByClass("dateOne").innerHTML = task.dueDate;
  } else {
    
    getElementsByClass("dateOne").innerHTML = "Due Date";
  }
  //alert(task.note);
  if (task.note != null) {
    getElementsByClass("note").value = task.note;
  } else {
    getElementsByClass("note").value = "";
  }
  getElementsByClass('right-top-content-one').innerHTML = "<div class = 'content'><button class='" + taskSelect + "' aria-hidden='true'></button><span class='content-span'>" + task.name + "</span><button class='" + important + "'float-r pointer task-important' aria-hidden='true'></button></div>";

  var sideContent = getElementsByClass("side-content");
  var listContent = getElementsByClass("list-content");
  var contentSpan = getElementsByClass("content-span");
  getElementsByClass("side-content").id = taskId;
  //contentSpan.innerHTML = task.name;
  sideContent.classList.toggle("side-content-open");

  //sideContent.style.display = "block";
  //listContent.style.width = "97%";

}



function closeRightSlider(e) {
  document.getElementsByClassName("active").className = "span";
  getElementsByClass("content-span").innerHTML = "";
  getElementsByClass("note").innerHTML = "";
  var sideContent = document.getElementsByClassName("side-content")[0];
  
  var listContent = document.getElementsByClassName("list-content")[0];
  //sideContent.style.display = "none";
  //sideContent.classList.toggle("side-content-collapse");
 //listContent.classList.toggle("list-content-collapsee");


}


function toggleLeftSideBar(e) {
  var sideNav = getElementsByClass("side-nav");
  var innerSpan = doc.getElementsByClassName("innerspan");
  sideNav.classList.toggle("sidenav-collapse");
  //innerSpan.classList.toggle("innerspan-collapse");
  for(let i=0 ; i<innerSpan.length ; i++){
    innerSpan[i].classList.toggle("innerspan-collapse");
    }
  /* if (innerSpan[0].style.display === "inline") {
  for (i = 0; i < innerSpan.length; i++) {
  innerSpan[i].style.display = "none";
}
sideNav.style.width = "6%";
} else {
for (i = 0; i < innerSpan.length; i++) {
innerSpan[i].style.display = "inline";
}
sideNav.style.width = "25%";
}*/
}

function findActivelist() {
  var currentList;
  allList.forEach(list => {
    if (list.active) {
      currentList = list;
    }
  });
  return currentList;
}




var addButton = document.getElementsByClassName('click-plus')[0];
var addInput = document.getElementsByClassName("input-text")[0];
var hiddenButton = document.getElementsByClassName("add-class")[0];

function addTask() {
  //console.log("ADD DIV"+addlistDiv);
  if (addInput.value.trim() === '' || addInput.value === "Add a Task") {
    document.getElementsByClassName("input-text")[0].focus();
  } else {
    var list = getElementsByClass("ul");
    //  newList = createHTMLElement("li", "item");


    console.log("input" + addInput.value);
    var listObj = new ToDo(addInput.value);
    var newList = createElement({ name: 'li', attribute: { class: 'item', id: "task" + listObj.id } });
    //  elementObj.addEventListener(element.attribute.eventAction, element.attribute.eventSuccessFunction, element.attribute.useCapture);

    var leftButton = createElement({ name: "button", attribute: { class: "fa fa-circle-thin listButton1", eventAction: 'click', eventSuccessFunction: enableClick, useCapture: "false" } });
    var content = createElement({ name: 'span', attribute: { class: 'span' } });
    //  console.log(listObj);
    var newText = document.createTextNode(listObj.name);
    var activeList = findActivelist();
    //activeList = findActivelistById();
    activeList.listOfTodo.push(listObj);
    console.log("ACTIVE LIST: " + activeList);
    content.appendChild(newText);
    var rightButton = createElement({ name: "button", attribute: { class: "fa fa-star-o listButton2 right-float", eventAction: 'click', eventSuccessFunction: enableStar, useCapture: "false" } });
    newList.appendChild(leftButton);
    newList.appendChild(content);
    newList.appendChild(rightButton);
    list.insertBefore(newList, list.lastChild);
    document.getElementsByClassName("add-class")[0].style.display = "none";
    addInput.placeholder = "Add a Task";
    addInput.value = "";
    //  addButton.classList.toggle("fa-circle-thin");
    //getElementsByClass("item",toggleRightSideBar,false);
    newList.addEventListener('click', toggleRightSideBar, false);


    /*    items =  getElementsByClass("item");
    for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', toggleRightSideBar, false);
  }*/
  }

};

hiddenButton.addEventListener('click', addTask, false);

function add(e) {
  addButton.classList.toggle("fa-circle-thin");
  if (addInput.value.trim() === '' || addInput.value === "Add a Task") {
    document.getElementsByClassName("input-text")[0].focus();
    document.getElementsByClassName("add-class")[0].style.display = "block";
  } else {

    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('click', toggleRightSideBar, false);
    }
  }
  //items[length].
};
addButton.addEventListener('click', add, false);

function showList(evt) {
  var list = getElementsByClass("ul");
  for (var i = 0; i < toDo.length; i++) {

    var newList = createHTMLElement("li", "item");
    var leftButton = createHTMLElement("button", "fa fa-circle-thin listButton1");
    var content = createHTMLElement('span', 'span');
    var newText = document.createTextNode(toDo[i]["list"]);
    content.appendChild(newText);
    var rightButton = createHTMLElement('button', 'fa fa-star-o listButton2 right-float');
    newList.appendChild(leftButton);
    newList.appendChild(content);
    newList.appendChild(rightButton);
    list.insertBefore(newList, list.lastChild);
    document.getElementsByClassName("add-class")[0].style.display = "none";
    addInput.placeholder = "Add a Task";
    addInput.value = "";
    addButton.classList.toggle("fa-circle-thin");
    var items = document.getElementsByClassName("span");
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('click', toggleRightSideBar, false);
    }
  }
}

function deleteTask(e) {
  var content = getElementsByClass("side-content").id;
  console.log("Content ID: " + content);
  var listId = findActivelist().id;
  console.log("ListID: " + listId);
  var task;
  for (var i = 0; i < allList[listId - 1].listOfTodo.length; i++) {
    console.log("delete ID:   " + "task" + allList[listId - 1].listOfTodo[i].id);
    if (content === "task" + allList[listId - 1].listOfTodo[i].id) {
      alert("delete ID: " + allList[listId - 1].listOfTodo[i].id);
      console.log("delete ID: " + allList[listId - 1].listOfTodo[i].id);
      allList[listId - 1].listOfTodo.splice(i, 1);
      task = allList[listId - 1];
      //alert("ID found");
    }
  }
  showListTasks(task);
  closeRightSlider();
}

function enableStar(e) {

  var listId = findActivelist().id;
  //console.log("ListID: "+listId);
  var task;
  for (var i = 0; i < allList[listId - 1].listOfTodo.length; i++) {
    if (e.target.parentNode.id === "task" + allList[listId - 1].listOfTodo[i].id) {
      alert("Task ID is: " + allList[listId - 1].listOfTodo[i].id);
      task = allList[listId - 1].listOfTodo[i];
      //  console.log("b4 change Task is: "+allList[listId-1]);
    }
  }

  if (e.currentTarget.classList.contains("fa-star-o")) {
    task.isImportant = true;
    e.currentTarget.classList.replace("fa-star-o", "fa-star");
    //  console.log("Task select"+taskSelect);
    //taskSelect.classList.replace("fa-circle-o","fa-check-circle");
    //console.log(taskSelect);
    //console.log("11111");
  } else {
    task.isImportant = false;
    //  console.log("Task after click isChecked is: "+task.isChecked);
    e.currentTarget.classList.replace("fa-star", "fa-star-o");
    //    taskSelect.classList.replace("fa-check-circle","fa-circle-o");
    console.log('2222');
  }

}

function enableClick(e) {
  //alert("butto-clicked");
  //    var list = getListById(getElementsByClassName("new-tasks").id);
  //  console.log("Event ID is: "+e.target.parentNode.id);
  var content = getElementsByClass("side-content").id;
  //  console.log("Content: "+content);
  var listId = findActivelist().id;
  //console.log("ListID: "+listId);
  var task;
  for (let i = 0; i < allList[listId - 1].listOfTodo.length; i++) {
    if (e.target.parentNode.id === "task" + allList[listId - 1].listOfTodo[i].id) {
      alert("Task ID is: " + allList[listId - 1].listOfTodo[i].id);
      task = allList[listId - 1].listOfTodo[i];
      //  console.log("b4 change Task is: "+allList[listId-1]);
    }
  }
  //console.log("Task is: "+task);
  //console.log("Task b4 click isChecked is: "+task.isChecked);
  //var task = getTaskById(e.currentTarget.parentElement.id,list);
  var taskSelect = getElementsByClass('task-select');
  //var  = getElementsByClassName('select-icon');
  //console.log(taskSelect.className);
  //console.log(e.currentTarget.className);
  if (e.currentTarget.classList.contains("fa-circle-thin")) {
    task.isChecked = true;
    console.log("Task name: " + task.name);

    console.log("Inside click after change:" + task.isChecked);
    // console.log("Check functuon: "+task.isChecked);
    console.log("Task after click isChecked is: " + task.isChecked);
    e.currentTarget.classList.replace("fa-circle-thin", "fa-check-circle");
    console.log("Task select" + taskSelect);
    //taskSelect.classList.replace("fa-circle-o","fa-check-circle");
    console.log(taskSelect);
    console.log("11111");
  } else {
    task.isChecked = false;
    //  console.log("Task after click isChecked is: "+task.isChecked);
    e.currentTarget.classList.replace("fa-check-circle", "fa-circle-thin");
    //    taskSelect.classList.replace("fa-check-circle","fa-circle-o");
    console.log('2222');
  }



  //e.stopPropagation();
}
