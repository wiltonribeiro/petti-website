import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
                      <Route exact path="/atividades" component={Activities} />
                      <Route exact path="/membros" component={Members} />
                      <Route exact path="/editais" component={Documents} />
                      <Route path={"*"} component={NotFound} />
                  </Switch>
              </MuiThemeProvider>
          </div>
      </Router>
    );
  }
}

export default App;
