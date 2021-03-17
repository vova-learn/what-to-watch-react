import axios from 'axios';

const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZATION: 401,
};

export const createApi = (onUnauthorization) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    widthCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;

    if (response.status === HttpCode.UNAUTHORIZATION) {
      onUnauthorization();

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
