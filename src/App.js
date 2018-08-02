import React, { Component } from 'react';
import AppBar from './components/AppBar'
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Members from "./views/Members/Members";
import Home from "./views/Home/Home";
import Activities from "./views/Activities/Activities";


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <AppBar/>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/atividades" component={Activities} />
                      <Route path="/membros" component={Members} />
                  </Switch>
              <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
