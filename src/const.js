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
