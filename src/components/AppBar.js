import React, { Component } from 'react';
import Bar from '@material-ui/core/AppBar';
import logo from '../images/logo.png';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from "./Menu"

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    img:{
        width:140,
        marginBottom:20,
        marginTop:10
    }
};

class AppBar extends Component {
  render() {
    return (
      <div style={styles.root}>
          <Bar position="static" color="#fff">
              <Toolbar>
                  <img src={logo} style={styles.img} />
                  <p style={styles.flex}/>
                  <Menu/>
              </Toolbar>
          </Bar>
      </div>
    );
  }
}

export default AppBar;
