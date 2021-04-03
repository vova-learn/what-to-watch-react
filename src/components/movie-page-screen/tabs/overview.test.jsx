import React from 'react';
import {render} from '@testing-library/react';
import Overview from './overview';

const film = {
  id: 1,
  name: `Macbeth`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
  backgroundColor: `#F1E9CE`,
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  rating: 3.3,
  scoresCount: 48798,
  director: `Justin Kurzel`,
  starring: [
    `Michael Fassbender`,
    `Marion Cotillard`,
    `Jack Madigan`
  ],
  runTime: 113,
  genre: `Drama`,
  released: 2015,
  isFavorite: false
};

it(``, () => {
  const {getByText} = render(
      <Overview film={film}/>
  );

  const descriptionElement = getByText(new RegExp(film.description, `i`));
  const ratingElement = getByText(new RegExp(`Director`, `i`));

  expect(descriptionElement).toBeInTheDocument();
  expect(ratingElement).toBeInTheDocument();
});
