import React, { Component } from 'react';
import img1 from '../../../images/cbsoft1.png'
import img2 from '../../../images/gn2.jpg'
import img3 from '../../../images/flisol2.jpg'
import img4 from '../../../images/ig1.jpg'
import img5 from '../../../images/ig3.jpg'
import img6 from '../../../images/gn4.jpg'
import img7 from '../../../images/gn1.jpg'
import img8 from '../../../images/flisol1.jpg'
import img9 from '../../../images/flisol3.jpg'
import ModalPhoto from "../../../components/ModalPhoto";


const styles = {
    root:{
        textAlign: "center",
    },
    content:{
        padding:20,
        display:"inline-block",
    },
};

class Media extends Component {

    state = {
        open: false,
        modal:{
           alt:"",
           img:"",
           description:""
        }
    };

    handleClickOpen = (alt,image) => {
        this.setState({
            open: true,
            modal:{
                alt:alt,
                image:image,
            }
        });
    };

  render() {
    return (
        <div style={{fontFamily:"Raleway", color:"#777"}}>
            <ModalPhoto open={this.state.open} alt={this.state.modal.alt} image={this.state.modal.image}/>
            <div style={styles.root}>
                <div style={styles.content}>
                    <h2>VEJA UM POUCO DO QUE NÓS FAZEMOS</h2>
                    <hr style={{width:"50px", color:"#fff"}}/>
                </div>
            </div>
            <div className="w3-row-padding" style={{padding:10}}>
                <div className="w3-third">
                    <img src={img1} alt="PET TI - CBSOFT 2017 em Fortaleza" onClick={(e) => this.handleClickOpen(e.target.alt,img1)} style={{width:"100%"}}/>
                    <img src={img4} alt="InfoGirl 2017" onClick={(e) => this.handleClickOpen(e.target.alt,img4)} style={{width:"100%"}}/>
                    <img src={img5} alt="Painel InforGirl nos Encontros Universitários 2017" onClick={(e) => this.handleClickOpen(e.target.alt,img5)} style={{width:"100%"}}/>
                </div>
                <div className="w3-third">
                    <img src={img2} alt="Recepção GameNight 2017" onClick={(e) => this.handleClickOpen(e.target.alt,img2)} style={{width:"100%"}}/>
                    <img src={img6} alt="Mesa de jogos na Game Night 2017" onClick={(e) => this.handleClickOpen(e.target.alt,img6)} style={{width:"100%"}}/>
                    <img src={img7} alt="Doação dos Alimentos recolhidos pela Game Night 2017" onClick={(e) => this.handleClickOpen(e.target.alt,img7)} style={{width:"100%"}}/>
                </div>
                <div className="w3-third">
                    <img src={img3} alt="Abertura FLISol 2017" onClick={(e) => this.handleClickOpen(e.target.alt,img3)} style={{width:"100%"}}/>
                    <img src={img8} alt="Minicurso FLISol 2017" onClick={(e) => this.handleClickOpen(e.target.alt,img8)} style={{width:"100%"}}/>
                    <img src={img9} alt="Organização FLISol 2017" onClick={(e) => this.handleClickOpen(e.target.alt,img9)} style={{width:"100%"}}/>
                </div>
            </div>
      </div>
    );
  }
}

export default Media;
