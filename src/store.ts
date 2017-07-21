import { Action, createStore, Store } from 'redux';
import { isType } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { AddFriend } from './friend-list/actions';
import { AppState, Friend } from './types';

const initialState: AppState = {
  friends: [],
};

const reducer = reducerWithInitialState(
  initialState,
).case(AddFriend, (state, payload) => ({
  ...state,
  friends: [...state.friends, payload.friend],
}));

export const store: Store<AppState> = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
