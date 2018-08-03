import React, { Component } from 'react';
import Description from "./Sections/Description";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";
import DocumentsList from "./Sections/DocumentsList";

const styles = {
    
};

class Documents extends Component {

  render() {
    return (
        <div>
            <AppBar/>
            <Description/>
            <DocumentsList/>
            <Footer/>
        </div>
    );
  }
}

export default Documents;
