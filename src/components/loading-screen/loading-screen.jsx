import React from 'react';

const LoadingScreen = () => {
  const stylePageContent = {
    height: `100vh`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    alignItems: `center`,
  };

  const stylePageLoading = {
    flexGrow: 1,
    display: `flex`,
    alignItems: `center`,
  };

  return (
    <div className="page-content" style={stylePageContent}>
      <div className="page-loading" style={stylePageLoading}>
        <div className="page-loading__spinner">
          <div className="lds-spinner"><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
        </div>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <a to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoadingScreen;
