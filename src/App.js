import React, { Component } from 'react';
import AppBar from './components/AppBar'
import Home from "./views/Home/Home";


class App extends Component {
  render() {
    return (
      <div>
          <AppBar/>
          <Home/>
      </div>
    );
  }
}

export default App;
