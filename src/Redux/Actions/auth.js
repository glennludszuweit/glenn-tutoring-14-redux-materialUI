import * as api from '../API/api';

export const login = (userData) => async (dispatch) => {
  try {
    const response = await api.login(userData);
    console.log(response.data);
    dispatch({
      type: 'LOGIN',
      req: 'login',
      status: true,
      userData: response.data.user,
      token: response.data.tokens.access.token,
      refreshToken: response.data.tokens.refresh.token,
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN',
      req: 'login',
      status: false,
    });
    console.log(error.message);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await api.register(userData);
    dispatch({
      type: 'REGISTER',
      req: 'register',
      status: true,
      userData: response.data.user,
      token: response.data.tokens.access.token,
      refreshToken: response.data.tokens.refresh.token,
    });
  } catch (error) {
    dispatch({
      type: 'REGISTER',
      req: 'register',
      status: false,
    });
    console.log(error.message);
  }
};

export const logout = (userData) => async (dispatch) => {
  await api.logout(userData);
  dispatch({ type: 'LOGOUT', req: 'logout', status: true });
};
