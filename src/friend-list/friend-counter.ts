import { connect, ReduxConnectable } from '../polymer-redux';
import { store } from '../store';
import { AppState, Friend } from '../types';

class FriendCounter extends Polymer.Element implements ReduxConnectable {
  public static is = 'friend-counter';

  public static properties = {
    friendCount: {
      type: Number,
    },
  };

  private unsubscribe: () => void;

  private friendCount: number;

  public onState(state: AppState) {
    this.friendCount = store.getState().friends.length;
  }
}

window.customElements.define(FriendCounter.is, connect(FriendCounter));
