import React, { Component } from 'react';
import Parallax from "../../../components/Parallax";
import background from "../../../images/apresentacao.png"
import backgroundMobile from "../../../images/credenciamento2.jpg"
import Hidden from '@material-ui/core/Hidden';

const styles = {

};

class Description extends Component {

    render() {

        const contentDescription = <div style={{textAlign: "center", color:"#fff", fontFamily:"Raleway"}}>
            <p style={{fontSize:"50px"}}>Artigos <Hidden  only={['sm', 'xs']}>e Produções Acadêmicas</Hidden></p>
            <Hidden  only={['sm', 'xs']}>
                <h4 style={{marginTop:"-50px"}}>Produções do PET-TI como grupo de pesquisa</h4>
            </Hidden>
        </div>;

        return (
            <div>
                <Hidden  only={['sm', 'xs']}>
                    <Parallax opacity="0" size="250px" img={background} content={
                        contentDescription
                    } />
                </Hidden>

                <Hidden  only={['lg','xl','md']}>
                    <Parallax opacity="0" size="250px" img={backgroundMobile} content={
                        contentDescription
                    } />
                </Hidden>

            </div>
        );
    }
}

export default Description;
