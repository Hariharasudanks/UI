import * as React from 'react';
import './style.css';

import Listcontent from './Listcontent';
import Rightsidenav from './Rightsidenav';
import Sidenav from './Sidenav';

class Content extends React.Component<{},{ currentList: number, currentTask: number }>{
  constructor(props: {}) {
    super(props);
    this.state = {
      currentList: -1,
      currentTask: -1,
    };
  }
  public setCurrentList = (index:number)=> {
    this.setState({
      currentList: index,
      currentTask: -1
    });
    // alert("////Inside Content index is: "+index);
  }

  public setCurrentTask = (index:number)=> {
    this.setState({
      currentTask: index
    });
    // alert("////Inside Content index is: "+index);
  }

  public render() {
    return (
      <div className="contents">
        <Sidenav setCurrentList = {this.setCurrentList}/>
        <Listcontent activeList={this.state.currentList} setCurrentList = {this.setCurrentList} setCurrentTask={this.setCurrentTask}/>
        <Rightsidenav activeList={this.state.currentList} activeTask = {this.state.currentTask}/>
      </div>
    );
  }
}

export default Content;
