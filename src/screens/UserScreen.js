import React, { Component } from 'react';

/*The purpose of UserScreen is to render the specific user from the list that a user clicks on. If no user is selected (no parameter) a text is
outputted. The specific users info is fetched by ID and the address can be toggled to show and hide it.*/
class UserScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      user:[],
    }
  }

  //fetch the users from the API by the ID which was passed in as a parameter from UserComponent
  componentDidMount(){
    const {match} = this.props;
    const id = match.params.userName;
    fetch('http://api.softhouse.rocks/users/'+ id)
    .then(res => res.json())
    .then(json => {
      this.setState({
        user: json,
        address: false,
      })
    });
  }

  //updates the boolean state and to show and hide address info depending on the boolean value  
  toggleAddress = () => {
    this.setState({ address: !this.state.address})
    console.log(this.state)
  }

  render(){
    return(
      <div style={{ margin: "0 auto", textAlign: "center", backgroundColor: "white", padding: "15px", width: "30%" }}>
        <img style={{ height: "15em", width: "15em"}} src="https://static.nanopress.it/nanopress/fotogallery/1200X0/240691/contorno-di-batman.jpg" alt="batmanuser"/>
        <h3>{this.state.user.username}</h3>
        <h5>{this.state.user.name}</h5>
        <h6>{this.state.user.email}</h6>
        { 
          this.state.address?
            <div>
              <h6>{this.state.user.address.city}</h6>
              <h6>{this.state.user.address.street}</h6>
              <h6>{this.state.user.address.suite}</h6>
            </div> :null
        }
        <button className="btn btn-info" onClick={this.toggleAddress}>{this.state.address ? "Hide address" : "Show address"}</button>     
      </div>
    )
  }   
}

export default UserScreen;