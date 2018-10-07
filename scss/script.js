var items = document.getElementsByClassName('span');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', toggleRightSideBar);

}


function toggleRightSideBar(e) {
	var x = document.getElementsByClassName("side-content")[0];
	var y = document.getElementsByClassName("list-content")[0];
        var z = document.getElementsByClassName("content-span")[0];
        z.innerHTML = e.target.innerText;
        console.log(e);
	    x.style.display = "block";
	    y.style.width = "97%";
	  
	  //console.log("Clicked " + this.id);
}

var back = document.getElementsByClassName("fa-chevron-right")[0];
back.addEventListener('click',closeRightSlider);

function closeRightSlider(e){
	var x = document.getElementsByClassName("side-content")[0];
	var y = document.getElementsByClassName("list-content")[0];
        x.style.display = "none";
	 y.style.width = "97%";

 }
var button = document.getElementsByClassName('fa-bars')[0];
button.addEventListener('click', toggleLeftSideBar);

   function toggleLeftSideBar(e){
         var x = document.getElementsByClassName("side-nav")[0];
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

var add = function(evt) {
    addButton.classList.toggle("fa-circle-thin");
    if (addInput.value.trim() == '') {
        document.getElementsByClassName("input-text")[0].focus();
    } else {
        addNewList(addInput.value);
        addInput.value = "Add a Task";
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
 };

   /*var ul = document.getElementsByClassName("ul")[0];
   var li = document.createElement("li");
       ul.appendChild(li);
    li.innerHTML ="<button class='fa fa-circle-thin button class'></button><span>Lorem ipsum is the dummy text of the printing and typesetting industry</span><button class='fa fa-star-o right-float button class'></button>";  
  };*/

//addButton.addEventListener('click', addNewList);







