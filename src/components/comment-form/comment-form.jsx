import React, {useState} from 'react';
const RATINGS_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CommentForm = () => {
  const [userForm, setUserForm] = useState({
    rating: 0,
    comment: ``,
  });
  const {comment} = userForm;

  const handleFieldChange = ({currentTarget}) => {
    const {name, value} = currentTarget;
    setUserForm({...userForm, [name]: value});
  };

  return (
    <form action="#" className="add-review__form">
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
                  onChange={handleFieldChange}
                />
                <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="comment"
          id="review-text"
          placeholder="Review text"
          style={{marginTop: 0, marginBottom: 0, height: 150}}
          defaultValue={comment}
          onChange={handleFieldChange} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
