import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({style}) => (
  <div className="lds-spinner" style={style}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

Spinner.defaultProps = {
  display: `inline-block`,
  position: `relative`,
  width: `80px`,
  height: `80px`,
};

Spinner.propTypes = {
  style: PropTypes.object,
};

export default Spinner;
