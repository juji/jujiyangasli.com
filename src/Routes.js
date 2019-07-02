import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home'
import Contacts from './containers/Contacts'
import Works from './containers/Works'
import WorkDetails from './containers/WorkDetails'
import Technologies from './containers/Technologies'
import Play from './containers/Play'

export const sitemap = (
  <Switch>
    <Route path="/contacts" component={Contacts} />
    <Route path="/work/:id" component={WorkDetails} />
    <Route path="/play" component={Play} />
    <Route path="/work" component={Works} />
    <Route path="/technologies" component={Technologies} />
    <Route component={Home} />
  </Switch>
)

export default p => sitemap
