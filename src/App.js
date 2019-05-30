import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import DashboardScreen from './screens/DashboardScreen';
import UserScreen from './screens/UserScreen';

class App extends Component {   

render() {  
  return (
    <div className="App">
      <Router>
        <DashboardScreen/>
        <Route path='/Dashboard' component={DashboardScreen}/>
        <Route path="/User" exact component={UserScreen} />
        <Route path='/User/:userName' exact component={UserScreen}/>
      </Router>
      
    </div>
  );
}

}

export default App;