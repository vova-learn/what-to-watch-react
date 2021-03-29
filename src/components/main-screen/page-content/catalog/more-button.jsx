import React from 'react';
import PropTypes from 'prop-types';

const MoreButton = ({isVisible, onShowMoreButtonClick}) => {
  const moreButtonJSX = (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreButtonClick}
      >
      Show more
      </button>
    </div>
  );

  return (
    isVisible && moreButtonJSX
  );
};

MoreButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

export default React.memo(MoreButton);
