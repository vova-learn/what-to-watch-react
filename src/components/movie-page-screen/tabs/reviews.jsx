import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {downloadComment} from '../../../store/api-actions';
import {connect} from 'react-redux';
import Spinner from '../../spinner/spinner';

const Reviews = ({filmId, filmComments, isLoadComments, onLoadComments}) => {
  useEffect(() => {
    if (!isLoadComments) {
      onLoadComments(filmId);
    }
  }, [isLoadComments]);

  if (!isLoadComments) {
    return <Spinner style={{display: `block`, margin: `10rem auto`}}/>;
  }

  const reviewsJsx = filmComments.reduce((acc, {id, comment, user, date, rating}, index) => {
    const reviewJsx = (
      <div className="review" key={id}>
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>
          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
          </footer>
        </blockquote>
        <div className="review__rating">{rating}</div>
      </div>
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

const mapStateToProps = (state) => {
  return {
    filmComments: state.filmComments,
    isLoadComments: state. isLoadComments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadComments: (filmId) => {
      dispatch(downloadComment(filmId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
