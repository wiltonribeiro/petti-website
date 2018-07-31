import React, { Component } from 'react';
import Initial from "./Sections/Initial";
import About from "./Sections/About";
import Social from "./Sections/Social";

const styles = {

};



class Home extends Component {

  render() {

    return (
        <div>
            <Initial/>
            <About/>
            <Social/>
        </div>
    );
  }
}

export default Home;
