import { createStore, combineReducers } from 'redux';
import '../../bower_components/polymer/polymer.html';
import PolymerRedux from '../../bower_components/polymer-redux/dist/polymer-redux.html';
import friendListReducer from './friend-list-reducer';

const appReducer = combineReducers({
  friends: friendListReducer
});

const store = createStore(
  appReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default PolymerRedux(store);
