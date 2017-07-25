import { Action, combineReducers, createStore, Store } from 'redux';
import { AppState, Friend } from './types';

const reducer = combineReducers({

});

const reduxDevtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

export const store: Store<AppState> = createStore(
  reducer,
  reduxDevtools && reduxDevtools(),
);
