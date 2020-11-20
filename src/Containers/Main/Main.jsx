import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Auth from '../../Components/Auth/Auth';
import Posts from '../../Components/Posts/Posts';
import Status from '../../Components/Status/Status';

function Main() {
  return (
    <Container>
      <Status />
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route exact path='/' component={Posts} />
      </Switch>
    </Container>
  );
}

export default Main;
