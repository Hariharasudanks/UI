import * as React from 'react';

import Store from "./Store"

// import operations from './Opertions';


class TaskMap extends React.Component<{activeList : number,setCurrentTask: (index: any) => void } > {

constructor(props : any) {
super(props);
}
public getParentId = (event:any)=>{
  const id = (event.target.parentNode.id).split("task")[1]
  console.log("Parentttttttttt ID is: "+id)
  this.props.setCurrentTask(id);
}

public getTaskId = (event:any) => {
    const id = (event.target.id).split("task")[1]
    alert("Task ID is: "+id);
    this.props.setCurrentTask(id);
}
public findListById(listId : number) {
    let list ;
    // let id = parseInt(listId,10);
     console.log("inside TaskMap: ...Length"+Store.length);
    for(const listItem of Store) {
    
    if(listItem.getId() === listId ) {
    list = listItem;
    }
  }
    return list;
  }


public render() {
const list = this.findListById(this.props.activeList);

return (
(list != null ?
list.getListOfTodo().map((task) => 

<li className="item"  key = {task.getId()}  id= {"task"+task.getId()} onClick = {this.getTaskId} >
<button className="fa fa-circle-thin listButton1" onClick = {this.getParentId}/>
<span className="span" onClick = {this.getParentId}>{task.getName()}</span>
<button className="fa fa-star-o listButton2 right-float" onClick = {this.getParentId}/>
</li>


)
: "")




);






}


}
export default TaskMap;



