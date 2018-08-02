import React, { Component } from 'react';
import AppBar from './components/AppBar'
import Home from "./views/Home/Home";
import Activities from "./views/Activities/Activities";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Members from "./views/Members/Members";


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <AppBar/>
              <Route exact path="/" component={Home} />
              <Route path="/atividades" component={Activities} />
              <Route path="/membros" component={Members} />
              <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
