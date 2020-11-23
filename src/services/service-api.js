import axios from 'axios';
import { apiURL } from '../constants/index';

const instance = (token) => axios.create({
  baseURL: `${apiURL}/api/v1/`,
  headers: {
    'content-type': 'application/json',
  },
});

export const confirmUser = (id, userKey) => {
  return instance.post(
    'auth/confirm',
    JSON.stringify({
      id,
      key: userKey,
    }),
  );
};


