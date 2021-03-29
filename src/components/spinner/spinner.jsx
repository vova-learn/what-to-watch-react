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

Spinner.propTypes = {
  style: PropTypes.object,
};

export default Spinner;
