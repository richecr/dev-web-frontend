import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Profile from './pages/Profile';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/profile/:service" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
