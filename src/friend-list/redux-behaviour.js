import { createStore } from 'redux';
import PolymerRedux from '../../bower_components/polymer-redux/dist/polymer-redux.html';

const initialState = {
  friends: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRIEND': {
      const friends = state.friends.slice(0);
      friends.push(action.friend);
      return Object.assign({}, state, { friends });
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

const ReduxBehaviour = PolymerRedux(store);

export default ReduxBehaviour;
