import { createStore } from 'redux';
import PolymerRedux from '../../bower_components/polymer-redux/dist/polymer-redux.html';

const initialState = {
  friends: [],
};

const reducer = (state = initialState, action) => {
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

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const ReduxBehaviour = PolymerRedux(store);
