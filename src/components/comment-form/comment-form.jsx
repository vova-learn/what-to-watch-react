import React, {useState} from 'react';
import Comment from './comment/comment';
import Rating from './rating/rating';


const CommentForm = () => {
  const [userForm, setUserForm] = useState({
    rating: 0,
    comment: ``,
  });
  const {comment} = userForm;

  const postButtonStyle = {
    color: `rgb(56,44,42)`,
  };

  const handleFieldChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setUserForm({...userForm, [name]: value});
  };

  return (
    <form action="#" className="add-review__form">
      <Rating onRatingClick={handleFieldChange} />
      <Comment comment={comment} onCommentChange={handleFieldChange}>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            style={postButtonStyle}
          >
            Post
          </button>
        </div>
      </Comment>
    </form>
  );
};

export default CommentForm;
