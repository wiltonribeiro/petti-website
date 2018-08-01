import React, { Component } from 'react';
import Parallax from "../../../components/Parallax";
import background from "../../../images/gn1.jpg"
import Hidden from '@material-ui/core/Hidden';

const styles = {

};

class Description extends Component {

  render() {
    return (
        <div>
            <Parallax opacity="0" size="250px" img={background} content={
                <div style={{textAlign: "center", color:"#fff", fontFamily:"Raleway"}}>
                    <p style={{fontSize:"50px"}}><Hidden  only={['sm', 'xs']}>Nossas </Hidden>Atividades</p>
                    <Hidden  only={['sm', 'xs']}>
                        <h4 style={{marginTop:"-50px"}}>Divididas em Ensino, Pesquisa e Extensão</h4>
                    </Hidden>
                </div>
            } />
        </div>
    );
  }
}

export default Description;
