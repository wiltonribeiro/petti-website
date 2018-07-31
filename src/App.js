import React, { Component } from 'react';
import AppBar from './components/AppBar'
import Home from "./views/Home/Home";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div>
          <AppBar/>
          <Home/>
          <Footer/>
      </div>
    );
  }
}

export default App;
