import { connect } from 'react-redux';
import React from 'react';
import { Redirect, withRouter, Route } from 'react-router-dom'

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id)
})

const Auth = ({ loggedIn, exact, component: Component, path }) => (
  <Route
    exact={exact}
    path={path}
    render= { (props) =>
    loggedIn ? <Redirect to="/" /> : <Component {...props} /> }
  />
)

const Protected = ({ loggedIn, exact, component: Component, path }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      !loggedIn ? <Redirect to="/" /> : <Component {...props} />}
  />
)


export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);