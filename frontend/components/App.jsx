import React from 'react';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import HomepageContainer from './homepage/splash_page_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import { Route, Switch } from 'react-router-dom';
import BusinessIndexContainer from '../components/businesses/businesses_index_container';
import BusinessShowContainer from '../components/businesses/business_show_container';
import CreateReviewFormContainer from '../components/reviews/review_form/create_review_form';
import EditReviewFormContainer from '../components/reviews/review_form/edit_review_form';
import NotFound from '../components/homepage/not_found';
import UserProfilePageContainer from '../components/user_profile/user_profile_page_container';
import ProfileImageForm from '../components/user_profile/profile_image_form'

const App = () => (
  <div>
    
    <Switch>

      <Route exact path="/businesses/:businessId/reviews" component={CreateReviewFormContainer} />
      <Route exact path="/businesses/:businessId/reviews/:id/edit" component={EditReviewFormContainer} />
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
      <Route exact path="/businesses" component={BusinessIndexContainer} />
      <ProtectedRoute exact path="/users/:id" component={UserProfilePageContainer}/>
      <ProtectedRoute exact path="/profilepic" component={ProfileImageForm} />
      <Route exact path="/" component={HomepageContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <Route path="/" component={NotFound} />

    </Switch>
  </div>
);

export default App;