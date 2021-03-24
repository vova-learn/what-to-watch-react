import React from 'react';
import PropTypes from 'prop-types';
import {propFilm} from '../../../props-validation';
import {getDetailsRuntime} from '../../../utils';

const Details = ({film}) => {
  const {director, starring, runTime, genre, released} = film;

  const starringJsx = starring.map((actor, index, arr) => (
    index < arr.length - 1 ? (
      <React.Fragment key={`${actor}`}>
        {`${actor},`}<br />
      </React.Fragment>
    ) : actor
  ));

  const contentHeaders = {
    [`Director`]: director,
    [`Starring`]: starringJsx,
    [`Run Time`]: getDetailsRuntime(runTime),
    [`Genre`]: genre,
    [`Released`]: released,
  };

  const detailsJsx = Object.entries(contentHeaders).reduce((acc, item, index) => {
    const itemJsx = (
      <p className="movie-card__details-item" key={item[0]}>
        <strong className="movie-card__details-name">{item[0]}</strong>
        <span className="movie-card__details-value">{item[1]}</span>
      </p>
    );

    const isMembers = index < 2; // 2 - first items of contentHeaders

    return (isMembers ?
      {...acc, members: acc.members.concat(itemJsx)}
      : {...acc, about: acc.about.concat(itemJsx)}
    );
  }, {members: [], about: []});


  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">

        {detailsJsx.members}

      </div>
      <div className="movie-card__text-col">

        {detailsJsx.about}

      </div>
    </div>
  );
};

Details.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
};


export default Details;
