import React from 'react';
import PropTypes from 'prop-types';
import {RouteApp} from '../../const';
import {Link} from 'react-router-dom';

const Logo = ({isMainScreen, children, onLogoClick}) => {
  const logoActiveJsx = (
    <div className="logo" onClick={onLogoClick}>
      <Link className="logo__link" to={RouteApp.MAIN}>
        {children}
      </Link>
    </div>
  );

  const logoNoActiveJsx = (
    <div className="logo" >
      <a className="logo__link">
        {children}
      </a>
    </div>
  );

  return (
    <>
      {!isMainScreen && logoActiveJsx}
      {isMainScreen && logoNoActiveJsx}
    </>
  );
};

Logo.propTypes = {
  isMainScreen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onLogoClick: PropTypes.func.isRequired,
};

export default Logo;
