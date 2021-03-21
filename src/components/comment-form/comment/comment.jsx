import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({comment, onCommentChange, children}) => {
  const commentStyle = {
    backgroundColor: `rgba(56,44,42,.36)`,
  };

  const commentAreaStyle = {
    marginTop: 0,
    marginBottom: 0,
    height: 150,
  };

  return (
    <div className="add-review__text" style={commentStyle}>
      <textarea
        className="add-review__textarea"
        name="comment"
        id="review-text"
        placeholder="Review text"
        style={commentAreaStyle}
        defaultValue={comment}
        onChange={onCommentChange} />
      {children}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Comment;
