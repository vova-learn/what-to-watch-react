import Swal from "sweetalert2";
import {monthNames, Rating} from "./const";

const getConvertedTime = (time, minutes = true) => {
  const UNIT_TIME = 60;

  time = minutes ? time * UNIT_TIME : time;

  const h = Math.floor(time / UNIT_TIME / UNIT_TIME);
  const m = Math.floor((time / UNIT_TIME) - (h * UNIT_TIME));
  const s = time - (h * UNIT_TIME * UNIT_TIME) - (m * UNIT_TIME);

  const getTime = (unit) => {
    return unit < 10 ? `0${unit}` : `${unit}`;
  };

  return {
    h,
    m: getTime(m),
    s: getTime(s),
  };
};

export const getPlayerRuntime = (passedTime, totalTime, isReverse) => {
  let reverse = ``;

  if (isReverse) {
    passedTime = totalTime - passedTime;
    reverse = passedTime ? `-` : ``;
  }

  passedTime = getConvertedTime(passedTime, false);

  if (reverse) {
    return `${reverse}${passedTime.h}:${passedTime.m}:${passedTime.s}`;
  }

  return `${passedTime.h}:${passedTime.m}:${passedTime.s}`;
};

export const getDetailsRuntime = (runTime) => {
  runTime = getConvertedTime(runTime);

  return `${runTime.h}:${runTime.m}:${runTime.s}`;
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
