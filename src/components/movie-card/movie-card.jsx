import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {propFilm} from '../../props-validation';
import VideoPlayer from '../video-player/video-player';

const CardSize = {
  WIDTH: 280,
  HEIGHT: 175,
};

const MovieCard = ({film}) => {
  const {name, id} = film;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
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
};

export default MovieCard;
