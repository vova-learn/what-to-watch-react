import React from 'react';
import PropTypes from 'prop-types';

const MoreButton = ({isVisible, children}) => {
  return (
    <>
      {isVisible && children}
    </>
  );
};

MoreButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default MoreButton;
