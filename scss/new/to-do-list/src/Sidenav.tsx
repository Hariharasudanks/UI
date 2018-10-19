import * as React from 'react';
import './style.css';

import Lists from './list';
import ListMap from './Listmap';
import Store from './Store';

console.log("abcd");

class Sidenav extends React.Component<{ setCurrentList: (index: number) => void }, { inputValue: string, open: boolean, store: Lists[], activeList: number }> {

  constructor(props: any) {
    super(props);
    this.state = {
      activeList: 0,
      inputValue: "",
      open: true,
      store: Store,
    };

    // Initial state
  }
  public setCurrentList(index: any) {
    this.props.setCurrentList(parseInt(index, 10));
  }

  public handleOnclick = (e: any) => {
    this.setState({
      activeList: (e.target.id).split("list")[1]
    }, () => {
    //  alert("list " + this.state.activeList + "clicked");
      this.setCurrentList(this.state.activeList);
    });
    // this.setCurrentList((e.target.id).split("list")[1]);
  }
  public handleTest = (e: any) => {
    if (e.charCode === 13) {
      Store.push()
      this.setState({
        inputValue: e.currentTarget.value,

        // store: this.state.store.concat(new Lists((this.state.store.length !== 0? this.state.store[this.state.store.length-1].getId()+1 : 1) ,e.currentTarget.value,10,false,[])),
      });
      Store.push((new Lists((this.state.store.length !== 0 ? this.state.store[this.state.store.length - 1].getId() + 1 : 1), e.currentTarget.value, 10, false, [])));

      console.log("SIDE NAV: ID is" + this.state.store[this.state.store.length - 1].getId());
      e.currentTarget.value = ""
      // alert("1st: "+this.state.inputValue);
    }

  }
  public toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  public render() {
    return (
      <div className={"side-nav " + (this.state.open ? "" : "sidenav-collapse")}  >
        <ul className="sideLinks">
          <li>
            <a href="#"><button className="fa fa-bars  button-class " onClick={this.toggle} /></a>
          </li>
          <li>
            <a href="#"><button className="fa fa-sun-o button-class " /></a>
            <span className={"innerspan " + (this.state.open ? "" : "innerspan-collapse")}>My day</span>
          </li>
          <li>
            <a href="#"><button id="star" className="fa fa-star-o button-class" aria-hidden="true" /></a>
            <span className={"innerspan " + (this.state.open ? "" : "innerspan-collapse")}>Important</span>
          </li>

          <li>
            <a href="#"><button className="fa fa-calendar  button-class" /></a>
            <span className={"innerspan " + (this.state.open ? "" : "innerspan-collapse")}>Planned</span>
          </li>
          <li><a href="#"><button className="fa fa-home button-class" /></a>
            <span className={"innerspan " + (this.state.open ? "" : "innerspan-collapse")}>Tasks</span>

          </li>
        </ul>
        <ul className="inner-ul">
          <ListMap lists={this.state.store} active={this.state.activeList} handleOnclick={this.handleOnclick} />

          <li className="list-item"><button className="fa fa-plus side-button button-class" />
            <input className="innerspan-input innerspan side-button" placeholder="New List" onKeyPress={this.handleTest} />
          </li>

        </ul>
      </div>

    );
  }
}

export default Sidenav;
