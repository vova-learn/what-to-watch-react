import React from 'react';

import Catalog from './catalog/catalog';
import Footer from '../../footer/footer';

const PageContent = () => (
  <div className="page-content">
    <Catalog />
    <Footer isMainScreen />
  </div>
);

export default PageContent;
