import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {propFilm} from '../../props-validation';

const Player = (props) => {
  const {film, isMuted, width, height, autoplay, poster, timer, onActive, activeFilm} = props;
  const {previewVideoLink, posterImage} = film;

  useEffect(() => {
    onActive({
      ...activeFilm,
      autoplay: false,
      poster: true,
    });
  }, );

  return (
    <video
      src={previewVideoLink}
      poster={posterImage}
      muted={isMuted}
      preload="none"
      width={width}
      height={height}
    ></video>
  );
};

Player.defaultProps = {
  isMuted: true,
  width: `100%`,
  height: `100%`,
};

// Player.propTypes = {
//   film: PropTypes.shape(propFilm).isRequired,
//   isMuted: PropTypes.bool,
//   sizeBox: PropTypes.shape({
//     width: PropTypes.any.isRequired,
//     height: PropTypes.any.isRequired,
//   }),
// };

Player.propTypes = {
  film: PropTypes.any,
  isMuted: PropTypes.any,
  width: PropTypes.any,
  height: PropTypes.any,
  autoplay: PropTypes.any,
  poster: PropTypes.any,
  timer: PropTypes.any,
  onActive: PropTypes.any,
  activeFilm: PropTypes.any,
};

export default Player;
