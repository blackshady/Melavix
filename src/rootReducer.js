import {combineReducers} from 'redux';
// import {routerReducer} from 'react-router-redux';

import user from './reducer/user';

const rootReducer = combineReducers({
  user,
  // routing: routerReducer,
});

export default rootReducer;
