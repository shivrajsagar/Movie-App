import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Trending from '../pages/Trending';
import Latest from '../pages/Latest';
import Upcoming from '../pages/Upcoming';
import Toprated from '../pages/Toprated';

export default function Routes() {
  return (
    <Switch>
      <Route path="/trending" exact component={Trending} />
      <Route path="/toprated" component={Toprated} />
      <Route path="/upcoming" component={Upcoming} isPrivate />
      <Route path="/latest" component={Latest} />
    </Switch>
  );
}