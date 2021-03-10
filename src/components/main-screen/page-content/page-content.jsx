import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {propFilm} from '../../../props-validation';
import Catalog from './catalog';

const PageContent = ({filmsGenres}) => {

  return (
    <div className="page-content">
      <Catalog filmsGenres={filmsGenres} />
      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

PageContent.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(propFilm).isRequired
  ).isRequired,
  filmsGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PageContent;
