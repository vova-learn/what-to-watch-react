import React from 'react';
import PropTypes from 'prop-types';

import {propFilm} from '../../../props-validation';

import Overview from './overview';
import Details from './details';
import Reviews from './reviews';

const TabsContent = ({tabs, activeTab, film}) => {
  const [OVERVIEWS, DETAILS, REVIEWS] = tabs;

  const tabsConfig = {
    [OVERVIEWS]: <Overview film={film} />,
    [DETAILS]: <Details film={film} />,
    [REVIEWS]: <Reviews filmId={film.id} />,
  };

  return (
    <>{tabsConfig[activeTab]}</>
  );
};

TabsContent.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  film: PropTypes.shape(propFilm).isRequired,
};

export default TabsContent;
