import * as React from 'react';
import './style.css';

import RightSideToggle from './RightSideToggle';
import Todo from './Todo';

class Rightsidenav  extends React.Component<{ activeList:number, activeTask: number,currentSelectedTask:Todo,changeNote: (index: any) => void }> {
  public render() {
    return (
      <RightSideToggle activeList={this.props.activeList} activeTask={this.props.activeTask} currentSelectedTask={this.props.currentSelectedTask} changeNote = {this.props.changeNote}/>


    );
  }
}

export default Rightsidenav;

