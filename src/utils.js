import {Rating} from "./const";

export const getRuntime = (seconds) => {
  const UNIT_TIME = 60;
  const h = Math.floor(seconds / UNIT_TIME / UNIT_TIME);
  const m = Math.floor((seconds / UNIT_TIME) - (h * UNIT_TIME));
  const s = seconds - (h * UNIT_TIME * UNIT_TIME) - (m * UNIT_TIME);

  const getTime = (unit) => {
    return unit < 10 ? `0${unit}` : `${unit}`;
  };

  return `${h}:${getTime(m)}:${getTime(s)}`;
};

export const getRatingName = (rating) => {
  let grade = ``;

  const r = rating;
  switch (true) {
    case r >= 0 && r < 3:
      grade = Rating.BAD;
      break;
    case r >= 3 && r < 5:
      grade = Rating.NORMAL;
      break;
    case r >= 5 && r < 8:
      grade = Rating.GOOD;
      break;
    case r >= 8 && r < 10:
      grade = Rating.VGOOD;
      break;
    case r === 10:
      grade = Rating.AWESOME;
      break;
  }

  return grade;
};

export const getSimilarFilms = (films, film) => {
  const {genre, id} = film;
  return films.reduce((movies, movie) => {
    return movie.id !== id && movie.genre === genre ? movies.concat(movie) : movies;
  }, []);
};

export const getFimlsByGenre = (films, genre, defaultGenre) => {
  if (genre === defaultGenre) {
    return films;
  }

  return films.reduce((movies, movie) => {
    return movie.genre === genre ? movies.concat(movie) : movies;
  }, []);
};
