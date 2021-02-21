import React, {useState} from 'react';

const CommentForm = () => {
  const RATINGS_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [userStar, setUserStar] = useState(null);
  const [userComment, setUserComment] = useState(``);

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {RATINGS_VALUES.map((rating) => {
            return (
              <React.Fragment key={`star-${rating}`}>
                <input
                  className="rating__input"
                  id={`star-${rating}`}
                  type="radio"
                  name="rating"
                  defaultValue={rating}
                  onChange={({currentTarget}) => {
                    return userStar !== currentTarget.value ? setUserStar(currentTarget.value) : userStar;
                  }}
                />
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          style={{marginTop: 0, marginBottom: 0, height: 150}}
          defaultValue={userComment}
          onInput={({currentTarget}) => setUserComment(currentTarget.value)} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
