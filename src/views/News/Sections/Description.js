import React, { Component } from 'react';
import Parallax from "../../../components/Parallax";
import background from "../../../images/credenciamento.jpg"
import backgroundMobile from "../../../images/credenciamento2.jpg"
import Hidden from '@material-ui/core/Hidden';

const styles = {

};

class Description extends Component {

  render() {
    return (
        <div>
            <Hidden  only={['sm', 'xs']}>
                <Parallax opacity="0" size="250px" img={background} content={
                    <div style={{textAlign: "center", color:"#fff", fontFamily:"Raleway"}}>
                        <p style={{fontSize:"50px"}}>Notícias <Hidden  only={['sm', 'xs']}>e Documentos</Hidden></p>
                        <Hidden  only={['sm', 'xs']}>
                            <h4 style={{marginTop:"-50px"}}>Editais, Notícias e Documentos relacionados a nós</h4>
                        </Hidden>
                    </div>
                } />
            </Hidden>

            <Hidden  only={['lg','xl','md']}>
                <Parallax opacity="0" size="250px" img={backgroundMobile} content={
                    <div style={{textAlign: "center", color:"#fff", fontFamily:"Raleway"}}>
                        <p style={{fontSize:"50px"}}>Notícias <Hidden  only={['sm', 'xs']}>e Documentos</Hidden></p>
                        <Hidden  only={['sm', 'xs']}>
                            <h4 style={{marginTop:"-50px"}}>Editais, Notícias e Documentos relacionados a nós</h4>
                        </Hidden>
                    </div>
                } />
            </Hidden>

        </div>
    );
  }
}

export default Description;
