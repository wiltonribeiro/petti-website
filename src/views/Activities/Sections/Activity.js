import React, { Component } from 'react';
import ecopet from '../../../images/activities/ecopet.png'
import flisol from '../../../images/activities/flisol.png'
import infogirl from '../../../images/activities/infogirl.png'

const styles = {

};

class Description extends Component {

  render() {
    return (
        <div className="w3-row-padding" style={{padding:10}}>
            <div className="w3-third">
                <img src={ecopet} alt="PET TI - CBSOFT 2017 em Fortaleza" style={{width:"100%"}}/>
            </div>
            <div className="w3-third">
                <img src={flisol} alt="PET TI - CBSOFT 2017 em Fortaleza" style={{width:"100%"}}/>
            </div>
            <div className="w3-third">
                <img src={infogirl} alt="PET TI - CBSOFT 2017 em Fortaleza" style={{width:"100%"}}/>
            </div>
        </div>
    );
  }
}

export default Description;
