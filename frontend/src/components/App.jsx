import React from "react";
import { Link, Redirect, Route, Switch, HashRouter } from "react-router-dom";

import SplashContainer from "./splash/splash_container";

const App = () => (
  <div>
    <header>//NOTE: Nav will go here</header>
    <Switch>
      <main>
        <Route exact path="/" component={SplashContainer} />
      </main>
    </Switch>
  </div>
);

export default App;
