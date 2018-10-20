import * as React from 'react';
import './style.css';

import Listcontent from './Listcontent';
import Rightsidenav from './Rightsidenav';
import Sidenav from './Sidenav';
import Store from './Store';


class Content extends React.Component<{},{ currentList: number, currentTask: number,list:any,task:any  }>{
  constructor(props: {}) {
    super(props);
    this.state = {
      currentList: -1,
      currentTask: -1,
      list:null,
      task:null
    };
  }

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
    const list = this.state.list;
    let taskItem;
    if(list!= null){
    for(const task of list.getListOfTodo() ){
        if(index === task.getId()){
            taskItem = task
           alert("Content inside...Task: "+task.getId() +"found");
            }

    }
    
   }
   return taskItem;
}


  public setCurrentList = (index:number)=> {
    const currentSelectedList = this.findListById(index);
    this.setState({
      currentList: index,
      currentTask: -1,
      list:currentSelectedList
    });
    
  }

  public changeNote = (note:any) =>{
    const newTask = this.state.task
    newTask.setNote(note)
    this.setState({
    task : newTask
    });
  // this.state.task.setNote(note);

   console.log("Inside parent....Note is.."+ this.state.task.getNote());
  }
  public setCurrentTask = (index:number)=> {
    alert("////Inside Content SetCurrentTask.... index is: "+index);
    const taskItem = this.findTaksById(index);
    this.setState({
      currentTask: index,
      list:this.state.list,
      task:taskItem
    });
    // alert("////Inside Content index is: "+index);
  }

  public render() {
    return (
      <div className="contents">
        <Sidenav setCurrentList = {this.setCurrentList}/>
        <Listcontent activeList={this.state.currentList} setCurrentList = {this.setCurrentList} setCurrentTask={this.setCurrentTask}/>
        <Rightsidenav activeList={this.state.currentList} activeTask = {this.state.currentTask} currentSelectedTask = {this.state.task} changeNote = {this.changeNote}/>
      </div>
    );
  }
}

export default Content;
