import React from 'react';
import PropTypes from 'prop-types';

import Overview from './overview';
import Details from './details';
import Reviews from './reviews';
import {propFilm} from '../../../props-validation';

const TabsContent = ({tabs, activeTab, film}) => {
  const [OVERVIEWS, DETAILS, REVIEWS] = tabs;

  const tabsConfig = {
    [OVERVIEWS]: <Overview film={film} />,
    [DETAILS]: <Details film={film} />,
    [REVIEWS]: <Reviews />,
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
