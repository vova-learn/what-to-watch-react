import axios from 'axios';
import {initErrorAlert} from '../utils';
import {ErrorMessageText} from '../const';

const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

export const HttpCode = {
  UNAUTHORIZATION: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};

const ServerResponseErrorMessage = {
  EMAIL_EMPTY: `child "email" fails because ["email" is not allowed to be empty]`,
  EMAIL_NOT_VALID: `child "email" fails because ["email" must be a valid email]`,
  RATING_FALSE: `child "rating" fails because ["rating" must be larger than or equal to 1]`,
  COMMENT_TEXT_EMPTY: `child "comment" fails because ["comment" is not allowed to be empty]`,
};

export const createApi = (onUnauthorization) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;

    if (response.status === HttpCode.UNAUTHORIZATION) {
      onUnauthorization();

      throw error;
    }

    if (response.status === HttpCode.BAD_REQUEST) {
      if (response.data.error === ServerResponseErrorMessage.EMAIL_EMPTY) {
        initErrorAlert(ErrorMessageText.EMAIL_EMPTY);

        throw error;
      }

      if (response.data.error === ServerResponseErrorMessage.EMAIL_NOT_VALID) {
        initErrorAlert(ErrorMessageText.NOT_VALID);

        throw error;
      }

      if (response.data.error === ServerResponseErrorMessage.RATING_FALSE) {
        initErrorAlert(ErrorMessageText.RATING_FALSE);

        throw error;
      }

      if (response.data.error === ServerResponseErrorMessage.COMMENT_TEXT_EMPTY) {
        initErrorAlert(ErrorMessageText.COMMENT_EMPTY);

        throw error;
      }

      throw error;
    }

    if (response.status === HttpCode.NOT_FOUND && !response.config.url.includes(`/films/`)) {
      initErrorAlert(ErrorMessageText.SERVER_404);

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
