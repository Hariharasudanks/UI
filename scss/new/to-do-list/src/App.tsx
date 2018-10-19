import * as React from 'react';
import './style.css';

import Content from './Content';
import Topnav from './Topnav';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
         <Topnav/>
	<Content/>
       
      </div>
    );
  }
}

export default App;
