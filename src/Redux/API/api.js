import Axios from 'axios';

const URL = 'https:/sz.hktr.de/api';

//AUTH
export const login = (userData) => Axios.post(`${URL}/auth/login`, userData);
export const register = (userData) =>
  Axios.post(`${URL}/auth/register`, userData);
export const logout = (userData) =>
  Axios.post(`${URL}/auth/logout`, { refreshToken: userData });

//POSTS
export const getPosts = () => Axios.get(`${URL}/post`);
export const addPosts = (postData) => Axios.post(`${URL}/post`);
