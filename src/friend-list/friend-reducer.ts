import { Action, createStore, Store } from 'redux';
import { isType } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addFriend } from './actions';
import { Friend } from '../types';

export type FriendState = Friend[];

const initialState: FriendState = [];

export default reducerWithInitialState(
  initialState,
).case(addFriend, (state, payload) => [...state, payload]);
