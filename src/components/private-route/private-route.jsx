import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router';
import {AuthorizationStatus, RouteApp} from '../../const';

const PrivateRoute = ({render, exact, path, authorizationStatus}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH ?
            render(routeProps)
            : <Redirect to={RouteApp.SIGN_IN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
