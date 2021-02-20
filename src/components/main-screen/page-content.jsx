import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './movie-card';
import {Link} from 'react-router-dom';

const PageContent = ({films}) => {
  const [activeFilmID, setActiveFilmID] = useState(null);

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ul className="catalog__genres-list">
          <li className="catalog__genres-item catalog__genres-item--active">
            <a href="#" className="catalog__genres-link">All genres</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Comedies</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Crime</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Documentary</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Dramas</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Horror</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Kids &amp; Family</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Romance</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Sci-Fi</a>
          </li>
          <li className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">Thrillers</a>
          </li>
        </ul>
        <div className="catalog__movies-list">
          {films.map((film) => {
            return <MovieCard
              onHoverCard={setActiveFilmID}
              key={film.name.toLowerCase().split(` `).join(`-`) + film.id}
              film={film}
            />;
          })}
        </div>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
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
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scoresCount: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        runTime: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired
      }).isRequired
  ).isRequired
};

export default PageContent;
