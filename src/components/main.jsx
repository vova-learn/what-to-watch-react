import React from 'react';
import Logo from '../components/logo';
import MovieCard from '../components/movie-card';
import PageContent from '../components/page-content';

const Main = () => {
  return (
    <React.Fragment>
      <Logo />
      <MovieCard />
      <PageContent />
    </React.Fragment>
  );
};

export default Main;
