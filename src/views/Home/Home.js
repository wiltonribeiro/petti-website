import React, { Component } from 'react';
import Initial from "./Sections/Initial";
import About from "./Sections/About";
import Social from "./Sections/Social";
import Media from "./Sections/Media";
import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";

const styles = {

};



class Home extends Component {

  render() {

    return (
        <div>
            <AppBar/>
            <Initial/>
            <About/>
            <Social/>
            <Media/>
            <Footer/>
        </div>
    );
  }
}

export default Home;
