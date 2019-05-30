import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './UserComponent.css';   //importing file to add external styling

/*The purpose of UserComponent is to render the users from state and toggle colors depending on the boolean value from state. The link 
changes according to the user that was clicked on from the list.*/
class UserComponent extends Component {

  render() {
    //color from DashboardComponent is passed to UserComponent as props
    let color = this.props.color;    
    const stateTrue = 'rgb(238, 164, 164)';
    const stateFalse = 'rgb(202, 174, 248)';

    return (
      <div className="container user">
        <div className="row">
          <div className="col-md-6">
            {this.props.usersName.map((userName, index) => {
              return (
                <p className="usersList" key={index}><Link to={`/User/${userName.id}`}  style={{ color: color ? stateTrue : stateFalse}}>
                  {userName.name}
                </Link></p>              
              )
            })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default UserComponent;