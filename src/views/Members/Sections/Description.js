import React, { Component } from 'react';
import Parallax from "../../../components/Parallax";
import background from "../../../images/team.jpg"
import Hidden from '@material-ui/core/Hidden';

class Description extends Component {

  render() {
    return (
        <div>
            <Parallax opacity="0" size="250px" img={background} content={
                <div style={{textAlign: "center", color:"#fff", fontFamily:"Raleway"}}>
                    <p style={{fontSize:"50px"}}><Hidden  only={['sm', 'xs']}>Conheça </Hidden>Nosso Time</p>
                    <Hidden  only={['sm', 'xs']}>
                        <h4 style={{marginTop:"-50px"}}>8 Alunos, 4 Cursos, 1 PET - TI</h4>
                    </Hidden>
                </div>
            } />
        </div>
    );
  }
}

export default Description;
