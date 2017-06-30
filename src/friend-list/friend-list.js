import ReduxBehaviour, { type Friend } from './redux-behaviour';

class FriendList extends ReduxBehaviour(Polymer.Element) {
  friends: Friend[];

  static get is() {
    return 'friend-list';
  }
  static is: string;

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
