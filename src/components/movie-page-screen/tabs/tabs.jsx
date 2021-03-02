import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {propFilm} from '../../../props-validation';
import Details from './details';
import Overview from './overview';
import Reviews from './reviews';

const navLists = [`Overview`, `Details`, `Reviews`];

const Tabs = ({film}) => {
  const [activeTabs, setActiveTabs] = useState(navLists[0].toLowerCase());
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {navLists.map((title, index) => (
            <li
              key={`${title}${index}`}
              className={
                `movie-nav__item ${title.toLowerCase() === activeTabs && `movie-nav__item--active`}`
              }>
              <a
                href="#"
                id={title.toLowerCase()}
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  return setActiveTabs(evt.currentTarget.id);
                }}
              >{title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {activeTabs === `overview` && <Overview film={film} />}
      {activeTabs === `details` && <Details film={film} />}
      {activeTabs === `reviews` && <Reviews />}
    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
};


export default Tabs;
