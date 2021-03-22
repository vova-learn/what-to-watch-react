import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {uploadComment} from '../../store/api-actions';
import {ActionCreator} from '../../store/actions';
import {initErrorAlert} from '../../utils';
import {ErrorMessageText, FilmComment} from '../../const';

import Rating from './rating/rating';
import Comment from './comment/comment';

const CommentForm = ({isFormDisabled, onSubmit, onDisabledForm}) => {
  const [userForm, setUserForm] = useState({
    rating: 0,
    comment: ``,
  });
  const {rating, comment} = userForm;

  const [buttonSubmitDisabled, setButtonSubmitDisabled] = useState(true);

  useEffect(() => {
    if (rating && comment.length >= FilmComment.MIN_CHARACTERS) {
      setButtonSubmitDisabled(false);
    } else {
      setButtonSubmitDisabled(true);
    }
  }, [userForm]);

  const handleFieldChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setUserForm({...userForm, [name]: value});
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onDisabledForm(true);

    if (comment.length < FilmComment.MIN_CHARACTERS && comment.length) {
      initErrorAlert(ErrorMessageText.MIN_COMMENT, onDisabledForm, false);
      return;
    }

    onSubmit(userForm.comment, userForm.rating);
  };

  // TODO: удалить
  // if (isFormDisabled) {
  //   console.log(`disabled on`);
  // } else {
  //   console.log(`disabled off`);

  // }

  const postButtonStyle = {
    color: `rgb(56,44,42)`,
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <Rating rating={rating} onRatingChange={handleFieldChange} isFormDisabled={isFormDisabled}/>
      <Comment comment={comment} onCommentChange={handleFieldChange} isFormDisabled={isFormDisabled}>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            style={postButtonStyle}
            disabled={isFormDisabled || buttonSubmitDisabled}
          >
            Post
          </button>
        </div>
      </Comment>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDisabledForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isFormDisabled: state.isFormDisabled,
  };
};

const mapDispatchToProps = (dispatch, {id}) => {
  return {
    onSubmit: (comment, rating) => {
      dispatch(uploadComment(id, {comment, rating}));
    },
    onDisabledForm: (status) => {
      dispatch(ActionCreator.disabledForm(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
