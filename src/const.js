export const Lists = {
  START_VIEWCARD: 8,
  STEP_VIEWCARD: 8,
  MAX_SIMILAR: 4,
  MAX_GENER_TABS: 9,
};

export const Rating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VGOOD: `Very good`,
  AWESOME: `Awesome`,
};

export const RouteApp = {
  MAIN: `/`,
  SIGN_IN: `/login`,
  MY_LIST: `/mylist`,
  MOVIE_PAGE: `/films/:id`,
  MOVIE_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
};

export const CardSize = {
  WIDTH: 280,
  HEIGHT: 175,
};

export const FilmsGenres = {
  DEFAULT: `All genres`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ErrorMessageText = {
  EMAIL_EMPTY: `Поле Email address должно быть заполнено`,
  PASSWORD_EMPTY: `Поле Password должно быть заполнено`,
  NOT_VALID: `Введите валидный e-mail`,
  RATING_FALSE: `Рейтинг не может быть меньше единицы`,
  COMMENT_EMPTY: `Поле Review text должно содержать Ваш комментарий`,
  MIN_COMMENT: `Слишком короткий комментарий. Не мене 50-ти символов`,
  SERVER_404: `Нет ответа от сервера. Проверьте соединение с интернетом или повторите попытку позже`,
};

export const FilmComment = {
  MAX_CHARACTERS: 400,
  MIN_CHARACTERS: 50,
};

export const monthNames = [
  {name: `January`, numerical: `01`},
  {name: `February`, numerical: `02`},
  {name: `March`, numerical: `03`},
  {name: `April`, numerical: `04`},
  {name: `May`, numerical: `05`},
  {name: `June`, numerical: `06`},
  {name: `July`, numerical: `07`},
  {name: `August`, numerical: `08`},
  {name: `September`, numerical: `09`},
  {name: `October`, numerical: `10`},
  {name: `November`, numerical: `11`},
  {name: `December`, numerical: `12`},
];

export const FavoriteStatusApi = {
  ADD: 1,
  DELETE: 0,
};
