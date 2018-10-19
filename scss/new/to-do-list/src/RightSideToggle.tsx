import * as React from 'react';

import Store from './Store';
import Todo from './Todo';

export default class RightSideToggle  extends React.Component<{activeTask:number,activeList:number}>{

    public findListById(listId: number) {
        let list;
        for (const listItem of Store) {
    
          if (listItem.getId() === listId) {
            list = listItem;
          }
    
        }
        return list;
      }

 public findTaksById(index:number){
     const list = this.findListById(this.props.activeList)
     let taskItem;
     if(list!= null){
     for(const task of list.getListOfTodo() ){
         if(index === task.getId()){
             taskItem = task
            alert("Task: "+task.getId() +"found");
             }

     }
     
    }
    return taskItem;
 }
public render(){
     const task = this.findTaksById(this.props.activeTask) === undefined? new Todo(0,"",false,false,"","",false,"")
     :this.findTaksById(this.props.activeTask);
    return(    
    <div className= {"side-content" + (this.props.activeTask !== -1? " side-content-open" :"") }>
    <div className="content">
    <button className="fa fa-circle-thin button class"/>
  <span className="content-span">{task!.getName()}</span>
  <button className="fa fa-star-o right-float" aria-hidden="true"/>

    </div>
  </div>
    );

}

    
}
