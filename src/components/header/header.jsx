import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus, RouteApp} from '../../const';

const Header = ({isUserBlock, children, avatar, authorizationStatus}) => {
  const logoCenterClassName = `movie-card__head`;
  const logeLeftClassName = `user-page__head`;

  const avatarJsx = (
    <div className="user-block__avatar">
      <Link to={RouteApp.MY_LIST}>
        <img src={avatar} alt="User avatar" width={63} height={63} />
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
    <header className={`page-header ${isUserBlock ? logoCenterClassName : logeLeftClassName}`}>
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
  avatar: `img/avatar.jpg`,
};

Header.propTypes = {
  isUserBlock: PropTypes.bool.isRequired,
  children: PropTypes.node,
  avatar: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus,
    avatar: state.user.avatar,
  };
};

export default connect(mapStateToProps, null)(Header);
