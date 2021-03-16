import React from 'react';
import PropTypes from 'prop-types';

import {propFilm} from '../../../props-validation';
import Catalog from './catalog';
import Footer from '../../footer/footer';

const PageContent = ({films}) => {

  return (
    <div className="page-content">
      <Catalog films={films}/>
      <Footer />
    </div>
  );
};

PageContent.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
};

export default PageContent;
