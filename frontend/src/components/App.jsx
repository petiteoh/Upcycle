import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Link, Redirect, Route, Switch, HashRouter } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";
import NavContainer from './nav/nav_container';
import AboutContainer from './about/about';
import PostsContainer from './posts/posts_container';
import PostsFormContainer from './posts/post_form_container';
import LeaderboardContainer from './leaderboard/leaderboard_container';
import CategoriesDD from './posts/category-dd-container';
import EditFormContainer from './posts/edit_form_container';
import ProfileContainer from './profile/profile_container';

const App = () => (
  <div>
    <header>
      <NavContainer />
    </header>
    <Switch>
      <main className="main-app-container">
        <Route path="/categories" component={CategoriesDD} />
        <Route exact path="/" component={SplashContainer} />
        <Route exact path="/about" component={AboutContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/posts" component={PostsContainer} />
        <ProtectedRoute exact path="/create-post" component={PostsFormContainer} />
        <ProtectedRoute path="/edit-post/:post_id" component={EditFormContainer} />
        <ProtectedRoute path="/posts/user/edit-post/:post_id" component={EditFormContainer} />
        <ProtectedRoute exact path="/leaderboard" component={LeaderboardContainer} />
        <ProtectedRoute exact path="/posts/user/:creator_id" component={ProfileContainer} />
      </main>
    </Switch>
  </div>
);

export default App;
