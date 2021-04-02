import React from 'react';
import PropTypes from 'prop-types';

const MAX_RATING = 10;

const Rating = ({rating, isFormDisabled, onRatingChange}) => {
  const getFirstRadioStyle = (index) => {
    return !index ? ({display: `none`}) : ({});
  };

  return (
    <div className="rating">
      <div className="rating__stars">
        {new Array(MAX_RATING + 1).fill().map((value, index) => {
          value = index;
          return (
            <React.Fragment key={`star-${value}`}>
              <input
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                defaultValue={value}
                defaultChecked={value === Number(rating) && true}
                style={getFirstRadioStyle(value)}
                disabled={isFormDisabled}
                onChange={onRatingChange}
              />
              <label
                style={getFirstRadioStyle(value)}
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
