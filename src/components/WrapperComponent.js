import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './WrapperComponent.module.css';

/*The purpose of WrapperComponent is to "wrap around" the two cards: UserComponent and form. It includes a button to toggle(toggleContent)
the content string recieved as prop (info) from LoginScreen. The button also changes name from hide to show, depending on the boolean value 
from state.*/
class WrapperComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //content: true, 
      showInfo: false, 
    }
  }  

  //throws a warning if showInfo is not boolean
  static propTypes = {
    showInfo: PropTypes.bool,
  }

  //updates the showInfo state and shows/hides info depending on the boolean value 
  toggleContent = () => {
    const showsInfo = this.state.showInfo;
    this.setState({showInfo: !showsInfo});
  }    

  render() {
    //HELP ROBIN -> THIS CODE WILL NOT WORK IF ADDED TO MODULE.CSS, SINCE IT GETS OVERWRITTEN BY BOOTSTRAP! HOW DO I SOLVE THIS (BESIDES INLINE STYLING)?
    const styleToggleBTN = {
      width: "50%",
      margin: "0 auto",
      display: "block" 
    }

    return (
      <div className={styles.styleCards}>
       {this.props.children}  
       {
        this.state.showInfo === true ?
        <div>{this.props.info}</div>:null 
        }
        <p className={styles.styleLine}></p>
        {this.props.info &&
          <button className="btn btn-info" style={styleToggleBTN} onClick={this.toggleContent}>{this.state.showInfo ? "Hide info" : "Show info"}</button>
        }
      </div>
    );
  }
}

export default WrapperComponent;