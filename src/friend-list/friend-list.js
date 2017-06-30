import ReduxBehaviour, { type AppState } from './redux-behaviour';

class FriendList extends ReduxBehaviour(Polymer.Element) {
  static get is() {
    return 'friend-list';
  }
  static is: string;

  friends: $PropertyType<AppState, 'friends'>;
  static get properties() {
    return {
      friends: {
        type: Array,
        statePath: 'friends',
      },
    };
  }
}

window.customElements.define(FriendList.is, FriendList);

export default FriendList;
