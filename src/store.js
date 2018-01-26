import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import {composeWithDevTools} from 'redux-devtools-extension';
import setAuthorizationHeader from './utils/setAuthorizationHeader';
import {userLoggedIn} from './actions/auth';

// import root Reducer
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.melavixJWT) {
  const payload = decode(localStorage.melavixJWT);
  const user = {
    token: localStorage.melavixJWT,
    email: payload.email,
    confirmed: payload.confirmed,
  };
  setAuthorizationHeader(localStorage.melavixJWT);
  store.dispatch(userLoggedIn(user));
}

export default store;
