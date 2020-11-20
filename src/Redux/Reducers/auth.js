const defaultState = JSON.parse(localStorage.getItem('social-tutoring-auth'));

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        req: action.req,
        status: action.status,
        userData: action.userData,
        token: action.token,
        refreshToken: action.refreshToken,
      };

    case 'REGISTER':
      return {
        req: action.req,
        status: action.status,
        userData: action.userData,
        token: action.token,
        refreshToken: action.refreshToken,
      };

    case 'LOGOUT':
      localStorage.removeItem('social-tutoring-auth');
      return {
        req: action.req,
        status: action.status,
        userData: false,
        token: false,
        refreshToken: false,
      };

    default:
      return state;
  }
};

export default auth;
