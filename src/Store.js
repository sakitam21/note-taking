import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {reducer as noteReducer} from './note';
import {reducer as userReducer} from './user';

//import Perf from 'react-addons-perf';

const win = window;
//win.Perf = Perf

const reducer = combineReducers({
	note: noteReducer,
	user: userReducer
});

const middlewares = [thunkMiddleware];
/*
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')());
}
*/

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);
