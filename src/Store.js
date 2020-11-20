import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Redux/root';

const composeWithDevtool =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(Reducers, composeWithDevtool(applyMiddleware(thunk)));

Store.subscribe(() => {
  localStorage.setItem(
    'social-tutoring-auth',
    JSON.stringify(Store.getState().auth)
  );
});

export default Store;
