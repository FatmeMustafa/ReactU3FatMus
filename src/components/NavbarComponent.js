import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import styles from './NavbarComponent.module.css';

/*The purpose of NavbarComponent is to navigate through all three screens and add a specific style to the active link on the navigation.*/
class NavbarComponent extends Component {
  render() {
    return (      
      //HELP ROBIN! -> HOW DO I ADD AN ACTIVE CLASS AND USE IT IN INDEX.CSS WITHOUT MODULE.CSS OVERWRITING IT WITH STYLEA?
      <nav className={styles.styleNavbar}> 
        <NavLink to='/Login' className={styles.styleA} activeStyle={{color: "rgb(199, 197, 197)" }}>Login</NavLink>  
        <NavLink to='/Dashboard' className={styles.styleA} activeStyle={{color: "rgb(199, 197, 197)" }}>Dashboard</NavLink>
        <NavLink to='/User' className={styles.styleA} activeStyle={{color: "rgb(199, 197, 197)" }}>User</NavLink>
      </nav>  
    )
  }   
}

export default NavbarComponent;