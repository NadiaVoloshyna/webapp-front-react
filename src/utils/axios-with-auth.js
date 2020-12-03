import axios from 'axios';
// import * as JWT from 'jwt-decode';
// import history from '../history';
// import { apiURL } from '../constants';

const authHeader = {
    Authorization: localStorage.getItem('token')
    ? `Bearer ${localStorage.getItem('token')}`
    : null,
};

// const authorize = response => {
//   if (response.Message) {
//     isomorphicCookie.remove('token');
//     history.push('/login');
//   }
// };

export default {
    async get(url, data) {
     this.setHeader();
     const response = await axios.get(url, {
       headers: authHeader,
       params: data,
    });
    //     authorize(response.data);
     return response;
   },

    async put(url, data) {
        this.setHeader();
        const response = await axios.put(url, JSON.stringify(data), {
        headers: { ...authHeader, 'Content-Type': 'application/json' },
        });
    //    authorize(response.data);
        return response;
    },

    async delete(url, data) {
        this.setHeader();
        const response = await axios.delete(url, {
        headers: authHeader,
        params: data,
    });
    //     authorize(response.data);
        return response;
    },

  setHeader() {
    if (!authHeader.Authorization) {
      authHeader.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
  },

};

//   userId() {
//     const token = isomorphicCookie.load('token');
//     if (token) {
//       return JWT(token).user.id;
//     }
//     return null;
//   },
// };

