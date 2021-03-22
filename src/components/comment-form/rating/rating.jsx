import React from 'react';
import PropTypes from 'prop-types';

const RATINGS_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Rating = ({rating, isFormDisabled, onRatingChange}) => {
  const getFirstRadioStyle = (index) => {
    return !index ? ({display: `none`}) : ({});
  };

  return (
    <div className="rating">
      <div className="rating__stars">
        {RATINGS_VALUES.map((value, index) => {
          return (
            <React.Fragment key={`star-${value}`}>
              <input
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                defaultValue={value}
                defaultChecked={index === Number(rating) && true}
                style={getFirstRadioStyle(index)}
                disabled={isFormDisabled}
                onChange={onRatingChange}
              />
              <label
                style={getFirstRadioStyle(index)}
                className="rating__label"
                htmlFor={`star-${value}`}
              >
                Rating {value}
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.any.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default Rating;
