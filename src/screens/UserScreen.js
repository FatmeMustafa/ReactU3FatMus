import React, { Component } from 'react';

/*The purpose of UserScreen is to render the specific user from the list that a user clicks on. If no user is selected (no parameter) a text is
outputted. The specific users info is fetched by ID and the address can be toggled to show and hide it.*/
class UserScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      student:[],
    }
  }

  //fetch the users from the API by the ID which was passed in as a parameter from UserComponent
  componentDidMount(){
    const {match} = this.props;
    const id = match.params.userName;
    let userUrl = 'http://localhost:2000/students'+id;

    if (id === undefined) 
    userUrl = 'http://localhost:2000/students/';

    fetch(userUrl)
    .then(res => res.json())
    .then(json => {
      this.setState({
        student: json,
        address: false,
      })
    });
  }

  //updates the boolean state and to show and hide address info depending on the boolean value  
  toggleAddress = () => {
    this.setState({ address: !this.state.address})
    console.log(this.state)
  }

  render() {
    const {match} = this.props;
    const id = match.params.userName;

    return(
      <div> {id ? 
      <div style={{ margin: "0 auto", textAlign: "center", backgroundColor: "white", padding: "15px", width: "30%" }}>
        <img style={{ height: "15em", width: "15em"}} src="https://static.nanopress.it/nanopress/fotogallery/1200X0/240691/contorno-di-batman.jpg" alt="batmanuser"/>
        <h3>{this.state.student.username}</h3>
        <h5>{this.state.student.name}</h5>
        <h6>{this.state.student.email}</h6>
        { 
          this.state.address?
            <div>
              <h6>{this.state.student.address.city}</h6>
              <h6>{this.state.student.address.street}</h6>
              <h6>{this.state.student.address.zipcode}</h6>
            </div> :null
        }
        <button className="btn btn-info" onClick={this.toggleAddress}>{this.state.address ? "Hide address" : "Show address"}</button>     
      </div> : <div>No user selected.</div>}
      </div>
    )
  }   
}

export default UserScreen;