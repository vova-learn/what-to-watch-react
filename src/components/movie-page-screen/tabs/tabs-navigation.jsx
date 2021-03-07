import React from 'react';
import PropTypes from 'prop-types';

const getTabClassName = (tab, activeTab) => {
  return `movie-nav__item ${tab === activeTab && `movie-nav__item--active`}`;
};

const getTabTitle = (tab) => {
  const firstLetter = tab.charAt().toUpperCase();
  const title = tab.slice(1, tab.length);

  return `${firstLetter}${title}`;

  // TODO: practice delete
  // return tab.split(``).reduce((acc, item, index) => {
  //   return !index ? `${acc}${item.toUpperCase()}` : `${acc}${item}`;
  // }, ``);
};

const TabsNavigation = (props) => {
  const {tabs, activeTab, setActiveTab} = props;

  const handleTabClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.currentTarget.name);
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab, index) => (
          <li
            key={`${index}`}
            className={getTabClassName(tab, activeTab)}>
            <a
              href="#"
              name={tab}
              className="movie-nav__link"
              onClick={handleTabClick}
            >
              {getTabTitle(tab)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

TabsNavigation.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default TabsNavigation;
