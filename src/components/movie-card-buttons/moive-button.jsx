import React from 'react';
import PropTypes from 'prop-types';

const MovieButton = ({button, onButtonClick, isPlay, isFavoriteFilm, isUser}) => {
  let svg = button.svg;
  if (!isPlay) {
    if (!isUser) {
      svg = button.svg.noauth;
    } else if (isFavoriteFilm) {
      svg = button.svg.inlist;
    } else {
      svg = button.svg.add;
    }
  }

  const svgJsx = (<svg viewBox="0 0 19 19" width={19} height={19} xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref={`#${svg}`} />
  </svg>);


  return (
    <button
      className="btn btn--play movie-card__button"
      type="button"
      onClick={onButtonClick}
      disabled={!isUser}
    >

      {svgJsx}

      <span>{button.title}</span>
    </button>
  );
};

MovieButton.defaultProps = {
  isFavoriteFilm: false,
  isUser: true,
  isPlay: false,
};

MovieButton.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  button: PropTypes.object.isRequired,
  isPlay: PropTypes.bool.isRequired,
  isFavoriteFilm: PropTypes.bool,
  isUser: PropTypes.bool,
};

export default MovieButton;
