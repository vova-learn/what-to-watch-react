import React from 'react';
import PropTypes from 'prop-types';

import Overview from './overview';
import Details from './details';
import Reviews from './reviews';
import {propFilm} from '../../../props-validation';

const TabsContent = ({tabs, activeTab, film}) => {
  const [OVERVIEWS, DETAILS, REVIEWS] = tabs;

  const tabsConfig = {
    overview: {
      name: OVERVIEWS,
      component: <Overview film={film} />
    },
    details: {
      name: DETAILS,
      component: <Details film={film} />,
    },
    reviews: {
      name: REVIEWS,
      component: <Reviews />
    },

    getActiveComponent(tab) {
      switch (tab) {
        case this.overview.name:
          return this.overview.component;
        case this.details.name:
          return this.details.component;
        case this.reviews.name:
          return this.reviews.component;
        default:
          return <></>;
      }
    },
  };

  return (
    <>{tabsConfig.getActiveComponent(activeTab)}</>
  );
};

TabsContent.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  film: PropTypes.shape(propFilm).isRequired,
};

export default TabsContent;
