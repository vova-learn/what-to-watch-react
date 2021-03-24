import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentForm from '../comment-form/comment-form';
import Header from '../header/header';
import {fetchFilm} from '../../store/api-actions';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const AddReviewScreen = ({id, film, isLoadFilm, isLoadFilmFailed, onLoadFilm}) => {
  useEffect(() => {
    if (!isLoadFilm) {
      onLoadFilm(id);
    }

    if (isLoadFilm && film.id === id) {
      ActionCreator.resetFilm();
    }
  }, [isLoadFilm]);

  if (!isLoadFilm && !isLoadFilmFailed) {
    return <LoadingScreen />;
  } if (!isLoadFilm && isLoadFilmFailed) {
    return <NotFoundScreen />;
  }

  const {backgroundImage, backgroundColor, name, posterImage} = film;

  return (
    <section className="movie-card movie-card--full" style={{backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header isUserBlock={true}>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <CommentForm id={id}/>
      </div>
    </section>

  );
};

AddReviewScreen.propTypes = {
  id: PropTypes.number.isRequired,
  film: PropTypes.object.isRequired,
  isLoadFilm: PropTypes.bool.isRequired,
  isLoadFilmFailed: PropTypes.bool.isRequired,
  onLoadFilm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    film: state.film,
    isLoadFilm: state.isLoadFilm,
    isLoadFilmFailed: state.isLoadFilmFailed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadFilm: (id) => {
      dispatch(fetchFilm(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
