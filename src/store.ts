import { Action, combineReducers, createStore, Store } from 'redux';
import { isType } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addFriend } from './friend-list/actions';
import friendReducer from './friend-list/friend-reducer';
import { AppState, Friend } from './types';

const reducer = combineReducers({
  friends: friendReducer,
});

const reduxDevtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

export const store: Store<AppState> = createStore(
  reducer,
  reduxDevtools && reduxDevtools(),
);
