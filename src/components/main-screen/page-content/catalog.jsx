import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../../movies-list/movies-list';
import {propFilm} from '../../../props-validation';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/actions';
import {FilmsGenres} from '../../../const';
import {getFimlsByGenre} from './../../../utils';

const Catalog = (props) => {
  const {filmsGenres, state, onGenreChange} = props;

  const filmsByGenre = getFimlsByGenre(state.films, state.genre, FilmsGenres.DEFAULT);

  const handleGenresTabsClick = (evt, genre) => {
    evt.preventDefault();
    onGenreChange(ActionCreator.showGenre(genre));
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {filmsGenres.map((genre, index) =>
          (<React.Fragment key={index}>
            <li
              className={`catalog__genres-item ${genre === state.genre ? `catalog__genres-item--active` : ``}`}
            >
              <a
                href="#"
                className="catalog__genres-link"
                onClick={(evt) => handleGenresTabsClick(evt, genre)}
              >
                {genre}
              </a>
            </li>
          </React.Fragment>)
        )}
      </ul>
      <MoviesList films={filmsByGenre} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

Catalog.propTypes = {
  filmsGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    films: PropTypes.arrayOf(
        PropTypes.shape(propFilm).isRequired
    ).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreChange: (action) => {
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
