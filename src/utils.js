import Swal from "sweetalert2";
import {monthNames, Rating} from "./const";

export const getRuntime = (passedTime, totalTime, isReverse) => {
  const UNIT_TIME = 60;
  let reverse = null;

  if (isReverse) {
    passedTime = totalTime - passedTime;
    reverse = passedTime ? `-` : ``;
  }

  const h = Math.floor(passedTime / UNIT_TIME / UNIT_TIME);
  const m = Math.floor((passedTime / UNIT_TIME) - (h * UNIT_TIME));
  const s = passedTime - (h * UNIT_TIME * UNIT_TIME) - (m * UNIT_TIME);

  const getTime = (unit) => {
    return unit < 10 ? `0${unit}` : `${unit}`;
  };

  if (reverse) {
    return `${reverse}${h}:${getTime(m)}:${getTime(s)}`;
  }

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

export const getGenres = (films, amount) => {
  let genres = [];
  for (const film of films) {
    if (genres.length >= amount) {
      break;
    }

    if (!genres.includes(film.genre)) {
      genres.push(film.genre);
    }
  }

  return genres.sort();
};

export const getFimlsByGenre = (films, genre, defaultGenre) => {
  if (genre === defaultGenre) {
    return films;
  }

  return films.reduce((movies, movie) => {
    return movie.genre === genre ? movies.concat(movie) : movies;
  }, []);
};

export const initErrorAlert = (text, callback, argument = false) => {
  Swal.fire({
    title: `Ошибка!`,
    text,
    icon: `error`,
    confirmButtonText: `OK`,
  })
  .then(() => argument && (callback(argument)));
};

export const getFormattedDate = (string) => {
  const date = new Date(string);

  return {
    year: date.getFullYear(),
    month: {
      name: monthNames[date.getMonth()].name,
      numerical: monthNames[date.getMonth()].numerical,
    },
    day: date.getDate(),
  };
};

export const getProgressLineCount = (passedTime, totalTime, max) => {
  if (!passedTime || !totalTime) {
    return passedTime;
  }

  return passedTime * max / totalTime;
};
