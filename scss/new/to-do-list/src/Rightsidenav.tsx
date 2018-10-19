import * as React from 'react';
import './style.css';

import RightSideToggle from './RightSideToggle';

class Rightsidenav  extends React.Component<{ activeList:number, activeTask: number}> {
  public render() {
    return (
      <RightSideToggle activeList={this.props.activeList} activeTask={this.props.activeTask}/>


    );
  }
}

export default Rightsidenav;

