import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';

function Auth() {
  return (
    <Switch>
      <Route path='/auth/login' component={Login} />
      <Route path='/auth/register' component={Register} />
      <Redirect to='/auth/login' />
    </Switch>
  );
}

export default Auth;
