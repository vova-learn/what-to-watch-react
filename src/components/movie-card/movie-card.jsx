import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/actions';
import {propFilm} from '../../props-validation';

import VideoPlayerMini from './video-player-mini/video-player-mini';

const MovieCard = ({film, onResetLoadFilm}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const history = useHistory();

  const handleMovieCardClick = () => {
    onResetLoadFilm();
    history.push(`/films/${id}`);
  };

  const handelMovieCardMouseEnter = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const handleMovieCardMouseLeave = () => {
    setIsPlaying(false);
  };

  const cardCursorStyle = {
    cursor: `pointer`,
  };

  const {name, id} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseLeave={handleMovieCardMouseLeave}
      onMouseMove={handelMovieCardMouseEnter}
      onClick={handleMovieCardClick}
      style={cardCursorStyle}
    >
      <div className="small-movie-card__image">

        <VideoPlayerMini
          film={film}
          isPlaying={isPlaying}
        />

      </div>
      <h3 className="small-movie-card__title" >

        <Link
          className="small-movie-card__link"
          to={`/films/${id}`}
        >
          {name}
        </Link>

      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
  onResetLoadFilm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onResetLoadFilm: () => dispatch(ActionCreator.resetFilm()),
  };
};

export default connect(null, mapDispatchToProps)(MovieCard);
