import React from 'react';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import HomepageContainer from './homepage/splash_page_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import { Route } from 'react-router-dom';
import BusinessIndexContainer from '../components/businesses/businesses_index_container'

const App = () => (
  <div>
    <Route exact path="/" component={HomepageContainer} />
    <Route path="/businesses" component={BusinessIndexContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);

export default App;