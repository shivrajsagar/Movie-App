import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import Trending from "../pages/Trending";
import Latest from "../pages/Latest";
import Upcoming from "../pages/Upcoming";
import Toprated from "../pages/Toprated";

export default function Routes() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/trending" component={Trending} />
        <Route path="/toprated" component={Toprated} />
        <Route path="/upcoming" component={Upcoming} isPrivate />
        <Route path="/latest" component={Latest} />
      </Switch>
    </main>
  );
}
