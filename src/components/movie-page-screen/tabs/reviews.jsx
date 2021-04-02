import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {downloadComment} from '../../../store/api-actions';
import {getFormattedDate} from '../../../utils';
import {getFilmComments, getStatusLoadComments} from '../../../store/data/selectors';

import Spinner from '../../spinner/spinner';

const Reviews = ({filmId, filmComments, isLoadComments, onLoadComments}) => {
  useEffect(() => {
    if (!isLoadComments) {
      onLoadComments(filmId);
    }
  }, [isLoadComments]);

  const spinnerStyle = {
    display: `block`,
    margin: `10rem auto`,
  };

  if (!isLoadComments) {
    return <Spinner style={spinnerStyle}/>;
  }

  const getReviewJsx = (comment, name, {year, month, day}, rating) => (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time
            className="review__date"
            dateTime={`${year}-${month.numerical}-${day}`}
          >
            {`${month.name} ${day}, ${year}`}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );

  const reviewsJsx = filmComments.reduce((acc, {id, comment, user, date, rating}, index) => {
    const commentDate = getFormattedDate(date);

    const reviewJsx = (
      <React.Fragment key={id}>
        {getReviewJsx(comment, user.name, commentDate, rating)}
      </React.Fragment>
    );

    return index % 2 ?
      {...acc, rightColumn: [...acc.rightColumn, reviewJsx]}
      : {...acc, leftColumn: [...acc.leftColumn, reviewJsx]};
  }, {leftColumn: [], rightColumn: []});

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviewsJsx.leftColumn}

      </div>

      <div className="movie-card__reviews-col">

        {reviewsJsx.rightColumn}

      </div>
    </div>
  );
};

Reviews.propTypes = {
  filmId: PropTypes.number.isRequired,
  filmComments: PropTypes.array.isRequired,
  isLoadComments: PropTypes.bool.isRequired,
  onLoadComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmComments: getFilmComments(state),
  isLoadComments: getStatusLoadComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments: (filmId) => {
    dispatch(downloadComment(filmId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
