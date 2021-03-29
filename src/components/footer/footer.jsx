import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/actions';
import Logo from '../logo/logo';

const Footer = ({isMainScreen, resetLoadFilm}) => {
  const handleLogoClick = () => {
    resetLoadFilm();
  };

  return (
    <footer className="page-footer">
      <div className="logo">

        <Logo isMainScreen={isMainScreen} isFooter onLogoClick={handleLogoClick}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Logo>

      </div>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  isMainScreen: false,
};

Footer.propTypes = {
  isMainScreen: PropTypes.bool,
  resetLoadFilm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  resetLoadFilm: () => {
    dispatch(ActionCreator.resetFilm());
  }
});

export default connect(null, mapDispatchToProps)(Footer);
