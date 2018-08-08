import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Page1, Page2 } from 'src/views/Demo1';


interface IProps {
  match: any,
}


class Layout1 extends React.Component<IProps, any> {
  public render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.url}/page1`} component={Page1} />
        <Route exact path={`${match.url}/page2`} component={Page2} />
        <Redirect from={match.url} to={`${match.url}/page1`} />
      </Switch>
    );
  }
}

export default Layout1;