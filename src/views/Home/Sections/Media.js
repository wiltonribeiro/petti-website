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
  render() {
    return (
        <div style={{fontFamily:"Raleway", color:"#777"}}>
            <div style={styles.root}>
                <div style={styles.content}>
                    <h2>VEJA UM POUCO DO QUE NÓS FAZEMOS</h2>
                    <hr style={{width:"50px", color:"#fff"}}/>
                </div>
            </div>
            <div className="w3-row-padding" style={{padding:10}}>
                <div className="w3-third">
                    <img src={img1} alt="cbsoft descrição" style={{width:"100%"}}/>
                    <img src={img4} alt="cbsoft descrição" style={{width:"100%"}}/>
                    <img src={img5} alt="cbsoft descrição" style={{width:"100%"}}/>
                </div>
                <div className="w3-third">
                    <img src={img2} alt="cbsoft descrição" style={{width:"100%"}}/>
                    <img src={img6} alt="cbsoft descrição" style={{width:"100%"}}/>
                    <img src={img7} alt="cbsoft descrição" style={{width:"100%"}}/>
                </div>
                <div className="w3-third">
                    <img src={img3} alt="cbsoft descrição" style={{width:"100%"}}/>
                    <img src={img8} alt="cbsoft descrição" style={{width:"100%"}}/>
                    <img src={img9} alt="cbsoft descrição" style={{width:"100%"}}/>
                </div>
            </div>
      </div>
    );
  }
}

export default Media;
