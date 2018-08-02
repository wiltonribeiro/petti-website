import React, { Component } from 'react';
import carla from '../../../images/team/Carla.png'
import abilio from '../../../images/team/Abilio.png'
import rayanne from '../../../images/team/Rayanne.png'
import nayara from '../../../images/team/Nayara.png'
import miranda from '../../../images/team/Miranda.png'
import ricardo from '../../../images/team/Ricardo.png'
import robberty from '../../../images/team/Robertty.png'
import lucas from '../../../images/team/Lucas.png'
import will from '../../../images/team/Will.png'

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
        name:"Carla Ilane",
        image: carla,
        charge: "Tutora"
    },
    abilio:{
        name:"Abilio Castro",
        image: abilio,
        charge: "Engenharia de Software"
    },
    rayanne:{
        name:"Rayanne Queiroz",
        image: rayanne,
        charge: "Design Digital"
    },
    nayara:{
        name:"Nayara Mesquita",
        image: nayara,
        charge: "Sistemas de Informação"
    },
    miranda:{
        name:"Paulo Miranda",
        image: miranda,
        charge: "Engenharia de Computação"
    },
    ricardo:{
        name:"Paulo Ricardo",
        image: ricardo,
        charge: "Engenharia de Computação"
    },
    robertty:{
        name:"Robberty Freitas",
        image: robberty,
        charge: "Engenharia de Computação"
    },
    lucas:{
        name:"Lucas Nascimento",
        image: lucas,
        charge: "Design Digital"
    },
    will:{
        name:"Wilton Neto",
        image: will,
        charge: "Engenharia de Software"
    },
};

class MembersList extends Component {

    loadMembers = () =>{
        let content = [];
        const keys = Object.keys(members);

        keys.forEach((key, i)=>{
            content.push(
                <div key={i} className="w3-quarter" style={{position:"relative", textAlign:"center", marginTop:10}}>
                    <img src={members[key].image} className="memberImage" alt={members[key].name+members[key].charge} style={{width:"70%"}}/>
                    <div style={styles.button} className="memberAbout">{members[key].charge}</div>
                </div>
            )
        });

        return content;
    };

    render() {
        return (
            <div className="w3-row-padding" style={{padding:10}}>
                {this.loadMembers()}
            </div>
        );
      }
}

export default MembersList;
