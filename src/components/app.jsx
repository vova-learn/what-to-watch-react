import React from 'react';
import Logo from './logo';
import MovieCard from './movie-card';
import PageContent from './page-content';

const App = (props) => {  
  return (
    <React.Fragment>
      <Logo />
      <MovieCard promoCard={props.promoCard}/>
      <PageContent />
    </React.Fragment>
  );
};

export default App;
