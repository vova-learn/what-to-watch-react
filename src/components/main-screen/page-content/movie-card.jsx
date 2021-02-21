import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieCard = ({film}) => {
  const {previewImage, name, id} = film;
  const [, setActiveFilmID] = useState(null);

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => setActiveFilmID(id)}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
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
};

export default MovieCard;
