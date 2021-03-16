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
    </div>
  );
};

export default LoadingScreen;
