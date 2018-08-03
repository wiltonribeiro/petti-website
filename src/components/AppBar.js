import React, { Component } from 'react';
import Bar from '@material-ui/core/AppBar';
import logo from '../images/logo.png';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from "./Menu"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"

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
        marginTop:10, cursor:"pointer"
    }
};

class AppBar extends Component {
  render() {
    return (
      <div style={styles.root}>
          <Bar position="static" color="#fff">
              <Toolbar>
                  <img src={logo} onClick={() => {window.location.assign('/')}} style={styles.img} />
                  <p style={styles.flex}/>
                  <Hidden  only={['sm', 'xs']}>
                      <Button color="inherit" onClick={() => {window.location.assign('/atividades')}} style={{fontFamily:"Poppins"}}>ATIVIDADES</Button>
                      <Button color="inherit" onClick={() => {window.location.assign('/membros')}} style={{fontFamily:"Poppins"}}>INTEGRANTES</Button>
                      <Button color="inherit" onClick={() => {window.location.assign('/editais')}} style={{fontFamily:"Poppins"}}>EDITAIS</Button>
                  </Hidden>
                  <Hidden  only={['lg','xl','md']}>
                      <Menu/>
                  </Hidden>
              </Toolbar>
          </Bar>
      </div>
    );
  }
}

export default AppBar;
