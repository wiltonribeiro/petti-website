import React, { Component } from 'react';
import Parallax from "../../../components/Parallax";
import background from "../../../images/social_media.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hidden from '@material-ui/core/Hidden';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const styles = {
    root:{
        color:"#fff",
        fontFamily:"Poppins"
    },
};

class Social extends Component {

  render() {
    return (
      <div style={styles.root}>
        <Parallax opacity="min" size="250px" img={background} content={
            <div style={{textAlign: "center"}}>
                <h1 style={{fontSize:"48px!important"}}> <Hidden  only={['sm', 'xs']}>Siga-nos nas </Hidden> Redes Sociais</h1>
                <Hidden  only={['sm', 'xs']}>
                    <h5 style={{marginTop:"-20px"}}>Esteja perto do PET e acompanhe as nossas novidades</h5>
                </Hidden>
                <div>
                    <a href="https://www.instagram.com/pettiqx/"><FontAwesomeIcon icon={faInstagram} className="instagram" size='2x' color="#fff" /> </a>
                    <a href="https://www.facebook.com/pettiqx"><FontAwesomeIcon icon={faFacebook} className="facebook" size='2x' color="#fff" /></a>
                    <a href="https://github.com/wiltonribeiro/petti-website"><FontAwesomeIcon icon={faGithub} className="github" size='2x' color="#fff" /></a>
                </div>
            </div>
        } />
      </div>
    );
  }
}

export default Social;
