import React from 'react';
import PropTypes from 'prop-types';
import {RouteApp} from '../../const';
import {Link} from 'react-router-dom';

const Logo = ({isMainScreen, isFooter, children, onLogoClick}) => {
  const logoLinkClass = `logo__link ${isFooter && `logo__link--light`}`;
  const logoActiveJsx = (
    <div className="logo" onClick={onLogoClick}>
      <Link className={logoLinkClass} to={RouteApp.MAIN}>
        {children}
      </Link>
    </div>
  );

  const logoNoActiveJsx = (
    <div className="logo" >
      <a className={logoLinkClass}>
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

Logo.defaultProps = {
  isFooter: false,
};

Logo.propTypes = {
  isMainScreen: PropTypes.bool.isRequired,
  isFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onLogoClick: PropTypes.func.isRequired,
};

export default Logo;
