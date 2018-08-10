import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from "./theme/Theme"
import Members from "./views/Members/Members";
import Home from "./views/Home/Home";
import Activities from "./views/Activities/Activities";
import NotFound from "./views/NotFound/NotFound";
import Documents from "./views/Documents/Documents";


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <MuiThemeProvider theme={theme}>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/atividades" component={Activities} />
                      <Route path="/membros" component={Members} />
                      <Route path="/editais" component={Documents} />
                      <Route path={"*"} component={NotFound} />
                  </Switch>
              </MuiThemeProvider>
          </div>
      </Router>
    );
  }
}

export default App;
