import React, { Component } from 'react';

import './DashboardComponent.css';   //importing file to add external styling

import UserComponent from './UserComponent';
import WrapperComponent from './WrapperComponent';

/*The purpose of DashboardComponent is to add(addUser) and remove(removeUser) users through a form. 
It includes a button to toggle the colors(toggleColor) of our users and renders a list with UserComponents.
Both users and color are stored in a state and updates based on the users actions. They are then passed to other components as props.*/
class DashboardComponent extends Component {  
  
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      value: "",
      color: false,
    }
  }

  //get the users from the API and set the state to the json response
  componentDidMount() {
    fetch('http://localhost:2000/students')
    .then(res => res.json())
    .then(json => {
      this.setState({
        students: json,
      })
    });
  }


  //updates the users state to the value the user inputed
  updateState = (event) => {
    this.setState({ value: event.target.value });
  }

  //ADD USER TO DATABASE!!!
  //updates the users state and resets the value state (prevState holds the value of users state before the setState was triggered)
  addUser = (event) => {
    event.preventDefault();
    this.setState(prevState => ({ students: [...prevState.students, prevState.value], value: ""}))
  }
  
  //ADD USER TO DATABASE!!!
  //updates the users state and removes the last element from the list
  removeUser = () => {
    this.setState({ students: this.state.students.slice(0, this.state.students.length - 1)}) 
  }

  //updates the color state and changes color depending on the boolean value  
  toggleColor = () => {
    this.setState({ color: !this.state.color})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <WrapperComponent>
              <UserComponent usersName={this.state.students} color={this.state.color}/>
              <button className="btn btn-primary" onClick={this.toggleColor}>Toggle Colors</button>
            </WrapperComponent>
          </div>
          <div className="col-md-6">
            <WrapperComponent>
              <form onSubmit={this.addUser}>
                <input type="text" className="form-control" placeholder="new user..." value={this.state.value} onChange={this.updateState}/>
              </form>
              <button className="btn btn-success" onClick={this.addUser} disabled={!this.state.value}>Add</button> 
              <button className="btn btn-danger" onClick={this.removeUser}>Remove</button> 
            </WrapperComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardComponent;