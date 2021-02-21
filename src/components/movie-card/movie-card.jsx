import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {propFilm} from '../../props-validation';
// import {useHistory} from 'react-router-dom';

const MovieCard = ({film}) => {
  const {previewImage, name, id} = film;
  const [activeFilmID, setActiveFilmID] = useState(null);
  // const history = useHistory();
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => setActiveFilmID(id)}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width={280} height={175} />
      </div>
      {/* onClick={() => history.push(`/films/${activeFilmID}`)} */}
      <h3 className="small-movie-card__title" >
        <Link className="small-movie-card__link" to={`/films/${activeFilmID}`}>{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: PropTypes.shape(propFilm),
};

export default MovieCard;
