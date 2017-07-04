import { AppState, Friend } from './app-state';
import { store } from './redux-behaviour';

class FriendCounter extends Polymer.Element {

  public static is = 'friend-counter';

  public static properties = {
    friendCount: {
      type: Number,
    },
  };

  private friendCount: number;

  public connectedCallback() {
    super.connectedCallback();
    this.updateFriendCount();
    this.unsubscribe = store.subscribe(() => this.updateFriendCount());
  }

  // never called, iron-pages is more like a tab bar that just hides elements.
  public disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe();
  }

  private updateFriendCount() {
    this.friendCount = store.getState().friends.length;
  }
}

window.customElements.define(FriendCounter.is, FriendCounter);
