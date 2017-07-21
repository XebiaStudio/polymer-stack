import { AppState, Friend } from './app-state';
import { store } from './redux-behaviour';
import { connect, ReduxConnectable } from '../polymer-redux';

class FriendCounter extends Polymer.Element implements ReduxConnectable {

  public static is = 'friend-counter';
  private unsubscribe: () => void;

  public static properties = {
    friendCount: {
      type: Number,
    },
  };

  private friendCount: number;

  onState(state: AppState) {
    this.friendCount = store.getState().friends.length;
  }
}

window.customElements.define(FriendCounter.is, connect(FriendCounter));
