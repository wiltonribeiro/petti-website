import React, { Component } from 'react';
import Bar from '@material-ui/core/AppBar';
import logo from '../images/logo.png';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from "./Menu"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import { Link } from 'react-router-dom';

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
                      <Link to="/atividades" className="link">
                          <Button color="inherit" style={{fontFamily:"Poppins"}}>ATIVIDADES</Button>
                      </Link>
                      <Link to="/membros" className="link">
                        <Button color="inherit" style={{fontFamily:"Poppins"}}>INTEGRANTES</Button>
                      </Link>
                      <Link to="/artigos" className="link">
                          <Button color="inherit" style={{fontFamily:"Poppins"}}>ARTIGOS</Button>
                      </Link>
                      <Link to="/noticias" className="link">
                        <Button color="inherit" style={{fontFamily:"Poppins"}}>NOTÍCIAS</Button>
                      </Link>
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
