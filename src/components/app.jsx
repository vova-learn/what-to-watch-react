import React from 'react';
import Logo from './logo';
import MovieCard from './movie-card';
import PageContent from './page-content';

const App = () => {
  return (
    <React.Fragment>
      <Logo />
      <MovieCard />
      <PageContent />
    </React.Fragment>
  );
};

export default App;
