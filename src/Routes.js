import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home'
import Contacts from './containers/Contacts'
import Works from './containers/Works'
import WorkDetails from './containers/WorkDetails'
import Technologies from './containers/Technologies'

export const sitemap = (
  <Switch>
    <Route path="/contacts" component={Contacts} />
    <Route path="/works/:id" component={WorkDetails} />
    <Route path="/works" component={Works} />
    <Route path="/technologies" component={Technologies} />
    <Route component={Home} />
  </Switch>
)

export default p => sitemap
