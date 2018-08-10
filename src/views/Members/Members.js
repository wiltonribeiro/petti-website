import React, { Component } from 'react';
import Description from "./Sections/Description";
import MembersList from "./Sections/MembersList";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";

class Members extends Component {

  render() {
    return (
        <div>
            <AppBar/>
            <Description/>
            <MembersList/>
            <Footer/>
        </div>
    );
  }
}

export default Members;
