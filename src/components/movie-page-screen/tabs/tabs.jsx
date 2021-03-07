import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {propFilm} from '../../../props-validation';
import TabsNavigation from './tabs-navigation';
import TabsContent from './tabs-content';

const tabs = [`overview`, `details`, `reviews`];

const Tabs = ({film}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="movie-card__desc">
      <TabsNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabsContent tabs={tabs} activeTab={activeTab} film={film} />
    </div>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape(propFilm).isRequired,
};


export default Tabs;
