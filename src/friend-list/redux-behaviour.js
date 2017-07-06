import { createStore } from 'redux';
import type { Reducer, Store } from 'redux';
import '../../bower_components/polymer/polymer.html';
import PolymerRedux from '../../bower_components/polymer-redux/dist/polymer-redux.html';

export type Friend = string;

export type AppState = {
  friends: Friend[],
};

type FriendActions = {
  type: 'ADD_FRIEND',
  friend: Friend,
};

const initialState: AppState = {
  friends: [],
};

const reducer: Reducer<AppState, FriendActions> = (
  state: AppState = initialState,
  action: FriendActions,
) => {
  switch (action.type) {
    case 'ADD_FRIEND': {
      const { friends } = state;
      const { friend } = action;
      return { ...state, friends: [...friends, friend] };
    }
    default:
      return state;
  }
};

export const store: Store<AppState, FriendActions> = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default PolymerRedux(store);
