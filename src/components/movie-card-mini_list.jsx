import React from 'react';
import PropTypes from 'prop-types';

const MovieCardMini = (props) => (
  <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={`img/${props.keyname}.jpg`} alt={props.title} width={280} height={175} />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{props.title}</a>
    </h3>
  </article>
);

MovieCardMini.propTypes = {
  id: PropTypes.number,
  keyname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCardMini;
