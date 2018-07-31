import React, { Component } from 'react';
import Initial from "./Sections/Initial";
import About from "./Sections/About";
import Social from "./Sections/Social";
import Media from "./Sections/Media";

const styles = {

};



class Home extends Component {

  render() {

    return (
        <div>
            <Initial/>
            <About/>
            <Social/>
            <Media/>
        </div>
    );
  }
}

export default Home;
