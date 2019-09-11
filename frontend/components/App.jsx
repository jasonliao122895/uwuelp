import React from 'react';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import HomepageContainer from './homepage/splash_page_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import { Route, Switch } from 'react-router-dom';
import BusinessIndexContainer from '../components/businesses/businesses_index_container';
import BusinessShowContainer from '../components/businesses/business_show_container';

const App = () => (
  <div>
    
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route exact path="/businesses" component={BusinessIndexContainer} />
    <Route exact path="/" component={HomepageContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);

export default App;