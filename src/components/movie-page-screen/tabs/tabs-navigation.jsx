import React from 'react';
import PropTypes from 'prop-types';

const TabsNavigation = (props) => {
  const {tabs, activeTab, setActiveTab} = props;

  const handleTabClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.currentTarget.name);
  };

  const getTabClassName = (tab, active = activeTab) => {
    const tabActiveClass = `movie-nav__item--active`;

    return `movie-nav__item ${tab === active && tabActiveClass}`;
  };

  const getTabTitle = (tab) => {
    const firstLetter = tab.charAt().toUpperCase();
    const title = tab.slice(1, tab.length);

    return `${firstLetter}${title}`;
  };

  const getTabJsx = (tab) => {
    return (
      <li
        className={getTabClassName(tab)}>
        <a
          href="#"
          name={tab}
          className="movie-nav__link"
          onClick={handleTabClick}
        >
          {getTabTitle(tab)}
        </a>
      </li>
    );
  };

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab) => (

          <React.Fragment key={tab}>
            {getTabJsx(tab)}
          </React.Fragment>

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
