import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router';
import browserHistory from '../../browser-history';
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
            : browserHistory.push({
              pathname: RouteApp.SIGN_IN,
              state: {prevPath: routeProps.match.path}
            })
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

// TODO: удалить
// TODO: import {Redirect} from 'react-router';
// TODO: <Redirect to={RouteApp.SIGN_IN} />
