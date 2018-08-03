import React, { Component } from 'react';
import Parallax from "../../../components/Parallax";
import background from "../../../images/credenciamento.jpg"
import Hidden from '@material-ui/core/Hidden';

const styles = {

};

class Description extends Component {

  render() {
    return (
        <div>
            <Parallax opacity="0" size="250px" img={background} content={
                <div style={{textAlign: "center", color:"#fff", fontFamily:"Raleway"}}>
                    <p style={{fontSize:"50px"}}>Editais <Hidden  only={['sm', 'xs']}>e Documentos</Hidden></p>
                    <Hidden  only={['sm', 'xs']}>
                        <h4 style={{marginTop:"-50px"}}>Editais, Notas e Documentos relacionados a nós</h4>
                    </Hidden>
                </div>
            } />
        </div>
    );
  }
}

export default Description;
