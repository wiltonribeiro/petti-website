import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import icon1 from '../../../images/iconEnsino.png';
import icon2 from '../../../images/iconPesquisa.png';
import icon3 from '../../../images/iconExten.png';

const styles = {
    root:{
        textAlign: "center",
    },
    content:{
        padding:20,
        display:"inline-block",
    },
    small:{
        fontSize:'13px',
        marginRight:'10px',
        marginLeft:'10px'
    }
};

class About extends Component {

  render() {

    return (
        <div style={{fontFamily:"Raleway", color:"#777", paddingBottom:20}}>
          <div style={styles.root}>
            <div style={styles.content}>
                <h2>SOBRE NÓS</h2>
                <hr style={{width:"50px", color:"#fff"}}/>
            </div>
          </div>
            <div className="w3-row-padding">
                <div className="w3-third" style={{textAlign: "center"}}>
                    <img src={icon1} width={130} height={130}/>
                    <h3>Ensino</h3>
                    <p style={styles.small}>Projetos e atividades para melhorar
                        as graduações do campus da UFC em Quixadá.</p>
                </div>
                <div className="w3-third" style={{textAlign: "center"}}>
                    <img src={icon2} width={130} height={130}/>
                    <h3>Pesquisa</h3>
                    <p style={styles.small}>Nas áreas de Design Digital, Engenharia de Software,
                        Ciência da Computação e Redes de Computadores.</p>
                </div>
                <div className="w3-third" style={{textAlign: "center"}}>
                    <img src={icon3} width={130} height={130}/>
                    <h3>Extensão</h3>
                    <p style={styles.small}>Organizamos o FLISoL Quixadá, InfoGirl e Game Night.</p>
                </div>
            </div>
        </div>

    );
  }
}

export default About;
