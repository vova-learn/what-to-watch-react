import axios from 'axios';
import {initErrorAlert} from '../utils';
import {ErrorMessageText} from '../const';

const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

export const HttpCode = {
  UNAUTHORIZATION: 401,
  FAIL_AUTHORIZATION: 400,
  FAIL_REQUEST: 404,
};

const ServerResponseErrorMessage = {
  EMAIL_EMPTY: `child "email" fails because ["email" is not allowed to be empty]`,
  EMAIL_NOT_VALID: `child "email" fails because ["email" must be a valid email]`,
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

    if (response.status === HttpCode.FAIL_AUTHORIZATION) {
      if (response.data.error === ServerResponseErrorMessage.EMAIL_EMPTY) {
        initErrorAlert(ErrorMessageText.EMAIL_EMPTY);
      }

      if (response.data.error === ServerResponseErrorMessage.EMAIL_NOT_VALID) {
        initErrorAlert(ErrorMessageText.NOT_VALID);
      }

      throw error;
    }

    // TODO:
    // if (response.status === HttpCode.FAIL_REQUEST) {
    //   console.log(error.response.status);
    //   throw error;
    // }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
