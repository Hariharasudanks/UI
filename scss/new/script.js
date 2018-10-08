var items = document.getElementsByClassName('span');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', toggleRightSideBar);

}
function getElementsByClass(className){
 return document.getElementsByClassName(className)[0];
 }

function toggleRightSideBar(e) {
        e.target.className = "active";
       // alert("Clicked"+e.target.innerText);
	var sideContent = getElementsByClass("side-content");
	var listContent = getElementsByClass("list-content");
        var contentSpan = getElementsByClass("content-span");
        contentSpan.innerHTML = e.target.innerText;
        console.log(e);
	    sideContent.style.display = "block";
	    listContent.style.width = "97%";
	  
	  //console.log("Clicked " + this.id);
}

var back = document.getElementsByClassName("fa-chevron-right")[0];
back.addEventListener('click',closeRightSlider);

function closeRightSlider(e){
       document.getElementsByClassName("active").className = "span";
	var sideContent = document.getElementsByClassName("side-content")[0];
	var listContent = document.getElementsByClassName("list-content")[0];
        sideContent.style.display = "none";
	 listContent.style.width = "97%";


 }
var button = document.getElementsByClassName('fa-bars')[0];
button.addEventListener('click', toggleLeftSideBar);

   function toggleLeftSideBar(e){
         var x = getElementsByClass("side-nav");
	 var y = document.getElementsByClassName("innerspan");
       if (y[0].style.display === "inline") {
           for(i = 0; i < y.length; i++){
            y[i].style.display = "none";
           }
             x.style.width = "6%";
	  } else {
	  for(i = 0; i < y.length; i++){
            y[i].style.display = "inline";
             }
	    x.style.width = "20%";
	  }
}



var addButton = document.getElementsByClassName('click-plus')[0];
var addInput = document.getElementsByClassName("input-text")[0];
var hiddenButton = document.getElementsByClassName("add-class")[0];
var rightAdd = function(){
    if (addInput.value.trim() === '' || addInput.value === "Add a Task") {
document.getElementsByClassName("input-text")[0].focus();}
    else{
    var list = document.getElementsByClassName("ul")[0];
    newList = document.createElement('li');
    newList.classList.add("item");
    leftButton = document.createElement('button');
    leftButton.classList.add("fa");
    leftButton.classList.add("fa-circle-thin");
    content = document.createElement('span');
    content.classList.add('span');
    newText = document.createTextNode(addInput.value);
    content.appendChild(newText);
    rightButton = document.createElement('button');
    rightButton.classList.add("fa");
    rightButton.classList.add("fa-star-o");
    rightButton.classList.add("right-float");
    newList.appendChild(leftButton);
    newList.appendChild(content);
    newList.appendChild(rightButton);
    list.insertBefore(newList, list.lastChild);
    document.getElementsByClassName("add-class")[0].style.display="none";
     addInput.placeholder = "Add a Task";
   addInput.value="";
       addButton.classList.toggle("fa-circle-thin");
 var items = document.getElementsByClassName("span");
for (var i = 0; i < items.length ; i++) {
    items[i].addEventListener('click', toggleRightSideBar, false);
}
}
 };
hiddenButton.addEventListener('click', rightAdd, false);


var add = function(e) {
    addButton.classList.toggle("fa-circle-thin");
    if (addInput.value.trim() === '' || addInput.value === "Add a Task") {
document.getElementsByClassName("input-text")[0].focus();
document.getElementsByClassName("add-class")[0].style.display="block";
} else {
   //addNewList(addInput.value);
    //addInput.value="";
      // addButton.classList.toggle("fa-circle-thin");
  
        var items = document.getElementsByClassName("item");
for (var i = 0; i < items.length ; i++) {
    items[i].addEventListener('click', toggleRightSideBar, false);
}
    }
    //items[length].
};
addButton.addEventListener('click', add, false);


   var addNewList = function(task){
     
       var list = document.getElementsByClassName("ul")[0];
      newList = document.createElement('li');
    newList.classList.add("item");
    leftButton = document.createElement('button');
    leftButton.classList.add("fa");
    leftButton.classList.add("fa-circle-thin");
    content = document.createElement('span');
    content.classList.add('span');
    newText = document.createTextNode(task);
    content.appendChild(newText);
    rightButton = document.createElement('button');
    rightButton.classList.add("fa");
    rightButton.classList.add("fa-star-o");
    rightButton.classList.add("right-float");
    newList.appendChild(leftButton);
    newList.appendChild(content);
    newList.appendChild(rightButton);
    list.insertBefore(newList, list.lastChild);
    document.getElementsByClassName("add-class")[0].style.display="none";
 };

   /*var ul = document.getElementsByClassName("ul")[0];
   var li = document.createElement("li");
       ul.appendChild(li);
    li.innerHTML ="<button class='fa fa-circle-thin button class'></button><span>Lorem ipsum is the dummy text of the printing and typesetting industry</span><button class='fa fa-star-o right-float button class'></button>";  
  };*/

//addButton.addEventListener('click', addNewList);

var deleteButton = document.getElementsByClassName('delete')[0];
 
var deleteList = function(){
 //alert(document.getElementsByClassName('active')[0].innerHTML);
 
  var element =  document.getElementsByClassName('active')[0];
  var ul = document.getElementsByClassName("ul")[0];
  var parent = document.getElementsByClassName('active')[0].parentNode;
  ul.removeChild(parent);
  //element.ClassName = "span";
  closeRightSlider();


};

deleteButton.addEventListener("click",deleteList);



