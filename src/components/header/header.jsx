import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus, RouteApp} from '../../const';

const Header = ({isUserBlock, children, authorizationStatus}) => {
  const avatarJsx = (
    <div className="user-block__avatar">
      <Link to={RouteApp.MY_LIST}>
        <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
      </Link>
    </div>
  );

  const signInJsx = (
    <div className="user-block__signin">
      <Link to={RouteApp.SIGN_IN} className="btn">Sign In</Link>
    </div>
  );

  const userBlockJsx = (
    <div className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ? avatarJsx : signInJsx}
    </div>
  );

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link className="logo__link" to={RouteApp.MAIN}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      {isUserBlock && userBlockJsx}
    </header>
  );
};

Header.defaultProps = {
  isUserBlock: true,
};

Header.propTypes = {
  isUserBlock: PropTypes.bool.isRequired,
  children: PropTypes.node,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus,
  };
};

export default connect(mapStateToProps, null)(Header);
