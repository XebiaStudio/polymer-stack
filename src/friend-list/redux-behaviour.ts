import { createStore, combineReducers, Reducer, Store } from 'redux';
import { AppState } from '../types';
import { PolymerRedux } from '../polymer-redux';
import friendReducer from './friend-reducer';

const appReducer: Reducer<any> = combineReducers({
  friends: friendReducer,
});

const store: Store<AppState> = createStore(
  appReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default PolymerRedux(store);
