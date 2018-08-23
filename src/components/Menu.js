import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import {faBars} from '@fortawesome/free-solid-svg-icons'

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
                  <Link to="/" className="link">
                      <ListItem button>
                              <ListItemText primary={<p style={styles.menuItem}>Home</p>} />
                      </ListItem>
                  </Link>
                  <Link to="/membros" className="link">
                      <ListItem button>
                          <ListItemText primary={<p style={styles.menuItem}>Integrantes</p>} />
                      </ListItem>
                  </Link>
                  <Link to="/atividades" className="link">
                      <ListItem button>
                              <ListItemText primary={<p style={styles.menuItem}>Atividades</p>} />
                      </ListItem>
                  </Link>
                  <Link to="/noticias" className="link">
                      <ListItem button>
                          <ListItemText primary={<p style={styles.menuItem}>Editais</p>} />
                      </ListItem>
                  </Link>
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
