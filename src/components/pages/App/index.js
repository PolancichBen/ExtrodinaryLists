import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LandingPage from '../LandingPage';
import ProfilePage from '../ProfilePage';

import GlobalHeader from '../../organisms/GlobalHeader';
import GlobalFooter from '../../organisms/GlobalFooter';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <GlobalHeader />
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/account" exact component={ProfilePage} />
      </Switch>
      <GlobalFooter />
    </Router>
  );
}

export default App;
