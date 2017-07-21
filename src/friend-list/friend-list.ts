import { Unsubscribe } from 'redux';
import { AppState, Friend } from './app-state';
import { connect, ReduxConnectable } from '../polymer-redux';

class FriendList extends Polymer.Element implements ReduxConnectable {
  public static is = 'friend-list';

  private friends: Friend[];

  onState(state: AppState) {
    this.friends = state.friends;
  }
}

window.customElements.define(FriendList.is, connect(FriendList));
