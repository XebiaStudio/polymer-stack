import { Unsubscribe } from 'redux';
import { connect, ReduxConnectable } from '../polymer-redux';
import { AppState, Friend } from '../types';

class FriendList extends Polymer.Element implements ReduxConnectable {
  public static is = 'friend-list';

  private friends: Friend[];

  public onState(state: AppState) {
    this.friends = state.friends;
  }
}

window.customElements.define(FriendList.is, connect(FriendList));
