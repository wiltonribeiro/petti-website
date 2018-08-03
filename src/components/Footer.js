import React, { Component } from 'react';
import background from "../images/social_media.png"
import ufc from "../images/logo_ufc.png"
import quixada from "../images/quixada.png"

const styles = {
    littleParallax:{
        backgroundImage: "url(" + background + ")", color:"#fff",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position:"relative",
        opacity:0.75
    },

    artificialLink:{
        cursor:"pointer",
        margin:5,
        fontSize:14
    }
};

class Footer extends Component {
  render() {
    return (
        <div>
          <div style={styles.littleParallax}>
              <div className="w3-row-padding" style={{paddingLeft:30,paddingTop:30}}>
                  <div className="w3-third">
                      <h3 style={{marginBottom:"-5px"}}>PET TI - CONEXÕES DE SABERES</h3>
                      <p>Av. José de Freitas Queiroz, 5003 – Cedro
                      <br/>Universidade Federal do Ceará - Campus Quixadá
                      <br/>Sala PET TI - Sesu
                      <br/>Bloco 01
                      <br/>petti@ufc.br</p>
                  </div>
                  <div className="w3-third">
                      <h3>LINKS</h3>
                      <span style={styles.artificialLink} onClick={() => {window.location.href = "https://www.quixada.ufc.br/"}}><b>Portal UFC</b></span>
                      <br/><span style={styles.artificialLink} onClick={() => {window.location.href = "http://www.cc.quixada.ufc.br/"}}><b>Curso de Ciência da Computação</b></span>
                      <br/><span style={styles.artificialLink} onClick={() => {window.location.href = "https://es.quixada.ufc.br/"}}><b>Curso de Engenharia de Software</b></span>
                      <br/><span style={styles.artificialLink} onClick={() => {window.location.href = "http://www.ec.quixada.ufc.br/"}}><b>Curso de Engenharia de Computação</b></span>
                      <br/><span style={styles.artificialLink} onClick={() => {window.location.href = "http://www.si.quixada.ufc.br/"}}><b>Curso de Sistemas de Informação</b></span>
                      <br/><span style={styles.artificialLink} onClick={() => {window.location.href = "http://www.dd.quixada.ufc.br/"}}><b>Curso de Design Digital</b></span>
                      <br/><span style={styles.artificialLink} onClick={() => {window.location.href = "http://www.rc.quixada.ufc.br/"}}><b>Curso de Redes de Computadores</b></span>
                      <br/>
                  </div>
                  <div className="w3-third">
                      <img src={ufc} width="80%"/>
                      <img src={quixada} width="70%"/>
                  </div>
              </div>
          </div>
            <div style={{padding:10, color:"#777", fontSize:'11px', textAlign: "center"}}>
                <p>© 2017 PET TI UFC, Todos os direitos reservados.</p>
            </div>
      </div>
    );
  }
}

export default Footer;
