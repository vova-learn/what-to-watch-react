import React from 'react';
import PropTypes from 'prop-types';
import {propFilm} from '../../../props-validation';
import Details from './details';
import Overview from './overview';

const Tabs = ({film}) => {
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {/* overview details reviews */}
      {/* <Overview film={film} /> */}
      {/* <Details film={film} /> */}
    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
};


export default Tabs;
