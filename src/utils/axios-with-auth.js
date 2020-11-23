// import axios from 'axios';
// import isomorphicCookie from 'isomorphic-cookie';
// import * as JWT from 'jwt-decode';
// import history from '../history';
// import { apiURL } from '../constants';

// const authHeader = {
//   Authorization: isomorphicCookie.load('token')
//     ? `Bearer ${isomorphicCookie.load('token')}`
//     : null,
// };

// const authorize = response => {
//   if (response.Message) {
//     isomorphicCookie.remove('token');
//     history.push('/login');
//   }
// };

// export default {
//   async get(url, data) {
//     this.setHeader();
//     const response = await axios.get(url, {
//       headers: authHeader,
//       params: data,
//     });
//     authorize(response.data);
//     return response;
//   },

//   setHeader() {
//     if (!authHeader.Authorization) {
//       authHeader.Authorization = `Bearer ${isomorphicCookie.load('token')}`;
//     }
//   },

//   userId() {
//     const token = isomorphicCookie.load('token');
//     if (token) {
//       return JWT(token).user.id;
//     }
//     return null;
//   },
// };

