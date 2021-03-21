import React from 'react';
import PropTypes from 'prop-types';

const RATINGS_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Rating = ({onRatingClick}) => {
  return (
    <div className="rating">
      <div className="rating__stars">
        {RATINGS_VALUES.map((value) => {
          return (
            <React.Fragment key={`star-${value}`}>
              <input
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                defaultValue={value}
                onChange={onRatingClick}
              />
              <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

Rating.propTypes = {
  onRatingClick: PropTypes.func.isRequired,
};
export default Rating;
