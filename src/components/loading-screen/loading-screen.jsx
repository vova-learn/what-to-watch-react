import React from 'react';
import Spinner from '../spinner/spinner';

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
          <Spinner />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
