import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Layout1 } from './layout';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/layout1" component={Layout1} />
          <Redirect from="/" to="/layout1" />
        </Switch>
      </Router>
    );
  }
}

export default App;
