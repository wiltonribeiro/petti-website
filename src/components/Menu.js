import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faUsers, faHandSpock, faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons'

const styles = {
    list: {
        width: 250,
        paddingTop: 50
    },
    fullList: {
        width: 'auto',
    },
    menuItem:{
        fontFamily: 'Varela Round',
        fontSize: '12sp'
    },
    colorTheme: "#6481b4"

};



class Menu extends Component {

    state = {
        activity: false,
    };

    openTheMenu = (status) => () => {
        this.setState({
            activity: status,
        });
    };

  render() {

      const sideList = (
          <div style={styles.list}>
              <List component="nav">
                  <ListItem button onClick={() => {window.location.assign('/')}}>
                          {/*<FontAwesomeIcon icon={faHome} size='2x' color={styles.colorTheme} />*/}
                          <ListItemText primary={<p style={styles.menuItem}>Home</p>} />
                  </ListItem>
                  <ListItem button onClick={() => {window.location.assign('/membros')}}>
                      {/*<FontAwesomeIcon icon={faUsers} size='2x' color={styles.colorTheme} />*/}
                      <ListItemText primary={<p style={styles.menuItem}>Integrantes</p>} />
                  </ListItem>
                  <ListItem button onClick={() => {window.location.assign('/atividades')}}>
                          {/*<FontAwesomeIcon icon={faHandSpock} size='2x' color={styles.colorTheme} />*/}
                          <ListItemText primary={<p style={styles.menuItem}>Atividades</p>} />
                  </ListItem>
                  <ListItem button onClick={() => {window.location.assign('/editais')}}>
                      {/*<FontAwesomeIcon icon={faCopy} size='2x' color={styles.colorTheme} />*/}
                      <ListItemText primary={<p style={styles.menuItem}>Editais</p>} />
                  </ListItem>
                  {/*<ListItem button>
                      <FontAwesomeIcon icon={faEnvelope} size='2x' color={styles.colorTheme} />
                      <ListItemText primary={<p style={styles.menuItem}>Contato</p>} />
                  </ListItem>*/}
              </List>
          </div>
      );

    return (
        <div>
            <Button onClick={this.openTheMenu(true)}>
                <FontAwesomeIcon size="2x" color={styles.colorTheme} icon={faBars} />
            </Button>
            <Drawer anchor="right" open={this.state.activity} onClose={this.openTheMenu(false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.openTheMenu(false)}
                    onKeyDown={this.openTheMenu(false)}
                >
                    {sideList}
                </div>
            </Drawer>
        </div>
    );
  }
}

export default Menu;
