import React, { Component } from 'react';
import carla from '../../../images/team/Carla.png'

const styles = {
    button:{
        position:"absolute",
        top:"50%",left:"50%",
        transform:"translate(-50%,-50%)",
        msTransform:"translate(-50%,-50%)",
        whiteSpace:"nowrap"
    }
};

const members = {
    carla:{
        name:"Carla Moreira",
        image: carla,
        charge: "Tutora"
    }
}

class MembersList extends Component {

  render() {
    return (
        <div>
            <div className="w3-row-padding" style={{padding:10}}>
                <div className="w3-quarter" style={{position:"relative", textAlign:"center"}}>
                    <img src={members.carla.image} className="blurImage" alt={members.carla.name+members.carla.charge} style={{width:"80%"}}/>
                    <div style={styles.button} className="buttonImage">{members.carla.charge}</div>
                </div>
                <div className="w3-quarter" style={{position:"relative", textAlign:"center"}}>
                    <img src={members.carla.image} className="blurImage" alt={members.carla.name+members.carla.charge} style={{width:"80%"}}/>
                    <div style={styles.button} className="buttonImage">{members.carla.charge}</div>
                </div>
                <div className="w3-quarter" style={{position:"relative", textAlign:"center"}}>
                    <img src={members.carla.image} className="blurImage" alt={members.carla.name+members.carla.charge} style={{width:"80%"}}/>
                    <div style={styles.button} className="buttonImage">{members.carla.charge}</div>
                </div>
                <div className="w3-quarter" style={{position:"relative", textAlign:"center"}}>
                    <img src={members.carla.image} className="blurImage" alt={members.carla.name+members.carla.charge} style={{width:"80%"}}/>
                    <div style={styles.button} className="buttonImage">{members.carla.charge}</div>
                </div>
            </div>
        </div>
    );
  }
}

export default MembersList;
