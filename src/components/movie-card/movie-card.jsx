import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from 'react-router-dom';
import {propFilm} from '../../props-validation';
import VideoPlayer from '../video-player/video-player';
import {CardSize} from '../../const';
import {ActionCreator} from '../../store/actions';
import {connect} from 'react-redux';

const MovieCard = ({film, onResetLoadFilm}) => {
  const {name, id} = film;
  const [isPlaying, setIsPlaying] = useState(false);
  const history = useHistory();

  const handleMovieCardClick = () => {
    onResetLoadFilm();
    history.push(`/films/${id}`);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      onClick={handleMovieCardClick}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          isPlaying={isPlaying}
          film={film}
          muted={true}
          width={CardSize.WIDTH}
          height={CardSize.HEIGHT}
        />
      </div>
      <h3 className="small-movie-card__title" >
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
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
