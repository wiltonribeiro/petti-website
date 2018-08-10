import React, { Component } from 'react';
import Description from "./Sections/Description";
import ActivityList from "./Sections/ActivityList";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";

class Activities extends Component {

  render() {
    return (
        <div>
            <AppBar/>
            <Description/>
            <ActivityList/>
            <Footer/>
        </div>
    );
  }
}

export default Activities;
