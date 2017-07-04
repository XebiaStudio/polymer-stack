import { Unsubscribe } from 'redux';
import { AppState, Friend } from './app-state';
import { store } from './redux-behaviour';

class FriendList extends Polymer.Element {

  public static is = 'friend-list';

  // not really necessary unless adding behaviour like e.g. readonly.
  public static properties = {
    friends: {
      type: Array,
    },
  };

  private friends: Friend[];
  private unsubscribe: Unsubscribe;

  public connectedCallback() {
    super.connectedCallback();
    this.onState(store.getState());
    this.unsubscribe = store.subscribe(() => this.onState(store.getState()));
  }

  // never called, iron-pages is more like a tab bar that just hides elements.
  public disconnectedCallback() {
    super.disconnectedCallback();
    this.unsubscribe();
  }

  private onState(state: AppState) {
    this.friends = state.friends;
  }
}

window.customElements.define(FriendList.is, FriendList);
