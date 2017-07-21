import { Action, createStore, Store } from 'redux';
import { isType } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addFriend } from './actions';

export type FriendState = string[];

const initialState: FriendState = [];

export default reducerWithInitialState(
  initialState,
).case(addFriend, (state, payload) => [...state, payload]);
