import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';

import './App.css';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import UserScreen from './screens/UserScreen';

class App extends Component {   

render() {  
  return (
    <div className="App">
      <Router>
      <NavbarComponent/>
      <Route path='/' exact component={LoginScreen}/>
      <Route path='/Login' component={LoginScreen}/>      
      <Route path='/Dashboard' component={DashboardScreen}/>
      <Route path="/User" exact component={UserScreen} />
      <Route path='/User/:userName' exact component={UserScreen}/>
      </Router>
    </div>
  );
}

}

export default App;