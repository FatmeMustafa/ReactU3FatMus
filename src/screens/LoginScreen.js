import React, { Component } from 'react';

import WrapperComponent from '../components/WrapperComponent'

/*The purpose of LoginScreen is to render WrapperComponent with children (form) and navigate to DashboardComponent when a user clicks on login*/
class LoginScreen extends Component {

  //navigate to Dashboard through history
  navigateToDashboard = () => {
    this.props.history.push('/Dashboard')
  }

  render() {
    return (
      <WrapperComponent info={"You need to click on the button to login:)"} >
        <form>
          <input type="text" className="form-control" placeholder="user..."/>
        </form>
        <button className="btn btn-success" onClick={this.navigateToDashboard}>Login</button> 
      </WrapperComponent>
    );
  }   
}

export default LoginScreen;