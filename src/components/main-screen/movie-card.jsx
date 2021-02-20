import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {film, onHoverCard} = props;

  const {previewImage, name, id} = film;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onHoverCard(id)}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        {/* TODO: ссылка на фильм */}
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }),
  onHoverCard: PropTypes.func.isRequired,
};

export default MovieCard;
