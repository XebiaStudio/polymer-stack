import { Action, createStore, Store } from 'redux';
import { isType } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { AddFriend } from './actions';

export type FriendState = string[];

const initialState: FriendState = [];

export default reducerWithInitialState(
  initialState,
).case(AddFriend, (state, payload) => [...state, payload]);
