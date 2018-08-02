import React, { Component } from 'react';
import Description from "./Sections/Description";
import MembersList from "./Sections/MembersList";


const styles = {
    
};

class Members extends Component {

  render() {
    return (
        <div>
            <Description/>
            <MembersList/>
        </div>
    );
  }
}

export default Members;
