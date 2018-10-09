var doc = document;
/*var one = {id: 1,
  isImportant: false,
  isChecked: false,
  content: "hioiiiiiiii"
}*
var three = {
  id: 3,
  isImportant: false,
  isChecked: false,
  content: "popadaspdpas"
}*/
/*var toDo = [one
  , {
    id: 2,
    isImportant: false,
    isChecked: false,
    content: "sufsdoifusdiufsdusofid"
  }, three,
  {
    id: 4,
    isImportant: false,
    isChecked: false,
    content: "harrish"
  }

];*/
var toDo = {
  name:"Untitled",
  isImportant: false,
  isChecked: false
}
var myList = {
  name: null,
  numberofTasks:null,
  listOfTodo: []
};
var allList = [];

function findTargetListIndex(event) {
  var target;
  if (event.target.classList.contains("list-item")) {
        target = event.target;
  } else {
    target = event.target.parentNode;
  }
  console.log(target);
  currentIndex = [].indexOf.call(doc.getElementsByClassName("list-item"), target);
  console.log(currentIndex);
  showLists(currentIndex);
}

function getElementsByClass(className) {
  return doc.getElementsByClassName(className)[0];
}

function ToDo(Myname){
  var obj = Object.create(toDo);
  obj.name = Myname;
  return obj;
}

function List(name, numberofTasks){
  var obj = Object.create(myList);
  obj.name = name;
  obj.numberofTasks = numberofTasks;
  obj.listOfTodo = [];
  return obj;

}
function createHTMLElement(elementName, className) {

  var htmlElement = document.createElement(elementName);
  htmlElement.className = className;
  return htmlElement;
}

function init() {
  var items = document.getElementsByClassName('span');
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', toggleRightSideBar);

  }

  //  var myList = getElementsByClass('mylist');
  //  myList.addEventListener('click',showList);
  var lists = document.getElementsByClassName('list-item');
  for (var i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', findTargetListIndex);

  }

  var button = getElementsByClass('fa-bars');
  button.addEventListener('click', toggleLeftSideBar);

  var back = getElementsByClass("fa-chevron-right");
  back.addEventListener('click', closeRightSlider);

  var addList = getElementsByClass('innerspan-input side-button');
  addList.addEventListener("keydown",function e(e) {
    if (e.keyCode == 13) {
      createList();
    }
  });
  /*function e(e) {
  if (e.keyCode == 13) {
  createList();
}
}););*/

var deleteButton = getElementsByClass('delete');
deleteButton.addEventListener("click", deleteList);
}

init();
function showLists(e){
  //alert(findTargetListIndex(e));
 //alert("showList fn..Index: "+e);
  var listObj = allList[e];
  //alert("List Name: "+list.name);
  var list = getElementsByClass("ul");
  getElementsByClass("heading").innerHTML = listObj.name;

  console.log("E is: "+ e);
  console.log("ListObj: "+ allList[e]);

 /*if(listObj.listOfTodo.length > 0) {
  listObj.listOfTodo.forEach(task => {
    newList = createHTMLElement("li", "item");
    leftButton = createHTMLElement("button", "fa fa-circle-thin");
    content = createHTMLElement('span', 'span');
    newText = document.createTextNode(task.content);
    content.appendChild(newText);
    rightButton = createHTMLElement('button', 'fa fa-star-o right-float');
    newList.appendChild(leftButton);
    newList.appendChild(content);
    newList.appendChild(rightButton);
    list.insertBefore(newList, list.lastChild);
    document.getElementsByClassName("add-class")[0].style.display = "none";
    addInput.placeholder = "Add a Task";
    addInput.value = "";
    addButton.classList.toggle("fa-circle-thin");});

}*/
  //console.log(findTargetListIndex(e));

}
function createElement(element) {
  var elementObj = doc.createElement(element.name);
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
  if (element.style) {
    if (element.style.cursor) {
      elementObj.style.cursor = element.style.cursor;
    }
  }
  return elementObj;
}

function createList(e){
  var ul = getElementsByClass("inner-ul");
  var input = getElementsByClass("innerspan-input");
  if (input.value.trim() === '' || input.value === "New List") {
    doc.getElementsByClassName("innerspan-input")[0].focus();
  }
  else{
    // alert(input.value);
    allList.push(List(input.value,2,));
    console.log(allList);
    //   list.removeChild(list.lastChild);
    //({name:"button",attribute: {class:"fa fa-circle-thin"}});
    var li1 = document.createElement("li");
    li1.classList.add("list-item");
    li1.addEventListener("click",findTargetListIndex);
    ul.insertBefore(li1, ul.lastChild.previousSibling);
    li1.innerHTML = "<a href='#'><button class='fa fa-list-ul button-class'></button></a><span class='innerspan mylist-innerspan'>"+input.value+"</span>";
    input.value = null;
    input.placeholder = "New List";
    /*var li = doc.createElement("li");
    list.appendChild(li);
    li.innerHTML = "<a href='#'><button class='fa fa-plus side-button button-class'></button></a><input class='innerspan-input' placeholder='New List'/>";*/
  }
  //list.appendChild("<li><a href='#'><button class='fa fa-plus side-button button-class'></button></a><input class='innerspan-input side button' placeholder='New List'/></li>");*/

}

function toggleRightSideBar(e) {
  e.target.className = "active";
  var sideContent = getElementsByClass("side-content");
  var listContent = getElementsByClass("list-content");
  var contentSpan = getElementsByClass("content-span");
  contentSpan.innerHTML = e.target.innerText;
  console.log(e);
  sideContent.style.display = "block";
  listContent.style.width = "97%";

  //console.log("Clicked " + this.id);
}



function closeRightSlider(e) {
  document.getElementsByClassName("active").className = "span";
  var sideContent = document.getElementsByClassName("side-content")[0];
  var listContent = document.getElementsByClassName("list-content")[0];
  sideContent.style.display = "none";
  listContent.style.width = "97%";


}


function toggleLeftSideBar(e) {
  //alert(toDo[0]["list"]);

  var sideNav = getElementsByClass("side-nav");
  var innerSpan = document.getElementsByClassName("innerspan");
  if (innerSpan[0].style.display === "inline") {
    for (i = 0; i < innerSpan.length; i++) {
      innerSpan[i].style.display = "none";
    }
    sideNav.style.width = "6%";
  } else {
    for (i = 0; i < innerSpan.length; i++) {
      innerSpan[i].style.display = "inline";
    }
    sideNav.style.width = "20%";
  }
}

function findCurrentlist() {
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
var rightAdd = function() {
  if (addInput.value.trim() === '' || addInput.value === "Add a Task") {
    document.getElementsByClassName("input-text")[0].focus();
  } else {
    var list = getElementsByClass("ul");
    newList = createElement({name: 'li', attribute: { class: 'item'}});
    //  newList = createHTMLElement("li", "item");

    leftButton = createElement({name:"button",attribute: {class:"fa fa-circle-thin"}});
    content = createElement({name:'span',attribute:{class: 'span'}});
    console.log("input"+addInput.value);
    var listObj = new ToDo(addInput.value);
    console.log(listObj);
    newText = document.createTextNode(listObj.name);
    content.appendChild(newText);
    rightButton = createHTMLElement('button', 'fa fa-star-o right-float');
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
};

hiddenButton.addEventListener('click', rightAdd, false);

function add(e) {
  addButton.classList.toggle("fa-circle-thin");
  if (addInput.value.trim() === '' || addInput.value === "Add a Task") {
    document.getElementsByClassName("input-text")[0].focus();
    document.getElementsByClassName("add-class")[0].style.display = "block";
  } else {
    //addNewList(addInput.value);
    //addInput.value="";
    // addButton.classList.toggle("fa-circle-thin");

    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('click', toggleRightSideBar, false);
    }
  }
  //items[length].
};
addButton.addEventListener('click', add, false);

function showList(evt){
  var list = getElementsByClass("ul");
  for(var i = 0;i < toDo.length;i++){

    newList = createHTMLElement("li", "item");
    leftButton = createHTMLElement("button", "fa fa-circle-thin");
    content = createHTMLElement('span', 'span');
    newText = document.createTextNode(toDo[i]["list"]);
    content.appendChild(newText);
    rightButton = createHTMLElement('button', 'fa fa-star-o right-float');
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



var deleteList = function() {
  //alert(document.getElementsByClassName('active')[0].innerHTML);

  var element = document.getElementsByClassName('active')[0];
  var ul = document.getElementsByClassName("ul")[0];
  var parent = document.getElementsByClassName('active')[0].parentNode;
  ul.removeChild(parent);
  //element.ClassName = "span";
  closeRightSlider();


};
