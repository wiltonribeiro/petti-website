import React, { Component } from 'react';
import Parallax from "../../../components/Parallax";
import background from "../../../images/social_media.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hidden from '@material-ui/core/Hidden';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const styles = {
    root:{
        marginTop:"20px",
        color:"#fff",
        fontFamily:"Poppins"
    },
    socialIcons:{
        cursor:"pointer",
        marginTop:"-20px!important",
        marginRight:40,
        marginLeft:40
    }
};

class Social extends Component {

  render() {

    return (
      <div style={styles.root}>
        <Parallax opacity="min" size="300px" img={background} content={
            <div style={{textAlign: "center"}}>
                <h1 style={{fontSize:"48px!important"}}> <Hidden  only={['sm', 'xs']}>Siga-nos nas </Hidden> Redes Sociais</h1>
                <Hidden  only={['sm', 'xs']}>
                    <h5 style={{marginTop:"-20px"}}>Esteja perto do PET e acompanhe as nossas novidades</h5>
                </Hidden>
                <div>
                    <FontAwesomeIcon icon={faInstagram} style={styles.socialIcons} size='2x' color="#fff" />
                    <FontAwesomeIcon icon={faFacebook} style={styles.socialIcons} size='2x' color="#fff" />
                    <FontAwesomeIcon icon={faGithub} style={styles.socialIcons} size='2x' color="#fff" />
                </div>
            </div>
        } />
      </div>
    );
  }
}

export default Social;
