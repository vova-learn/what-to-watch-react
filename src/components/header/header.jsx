import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {AuthorizationStatus, RouteApp} from '../../const';
import {ActionCreator} from '../../store/actions';

import Logo from './logo';

const Header = (props) => {
  const {
    isMainScreen,
    isHiddenSignInButton,
    isVisibleTitle,
    children,
    avatar,
    authorizationStatus,
    resetLoadFilm,
  } = props;

  const history = useHistory();

  const isUser = authorizationStatus === AuthorizationStatus.AUTH;

  const avatarJsx = (
    <div className="user-block__avatar">
      <Link to={RouteApp.MY_LIST}>
        <img src={avatar} alt="User avatar" width={63} height={63} />
      </Link>
    </div>
  );

  const handleSignInButtonClick = () => {
    history.push({
      pathname: RouteApp.SIGN_IN,
      state: {prevPath: history.location.pathname}
    });
  };

  const signInJsx = (
    <div className="user-block__signin">
      <a
        className="btn"
        onClick={handleSignInButtonClick}>
          Sign In
      </a>
    </div>
  );

  const userBlockJsx = (
    <div className="user-block">
      {isUser ? avatarJsx : (!isHiddenSignInButton && signInJsx)}
    </div>
  );

  const handleLogoClick = () => {
    resetLoadFilm();
  };

  const moviePageClass = `movie-card__head`;
  const userPageClass = `user-page__head`;

  return (
    <header className={`page-header ${isVisibleTitle ? userPageClass : moviePageClass}`}>

      <Logo isMainScreen={isMainScreen} onLogoClick={handleLogoClick}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Logo>

      {children}
      {userBlockJsx}
    </header>
  );
};

Header.defaultProps = {
  isMainScreen: false,
  isHiddenSignInButton: false,
  isVisibleTitle: false,
  avatar: `img/avatar.jpg`,
};

Header.propTypes = {
  isMainScreen: PropTypes.bool.isRequired,
  isHiddenSignInButton: PropTypes.bool.isRequired,
  isVisibleTitle: PropTypes.bool.isRequired,
  children: PropTypes.node,
  avatar: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  resetLoadFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus,
    avatar: state.user.avatar,
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetLoadFilm: () => {
    dispatch(ActionCreator.resetFilm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
