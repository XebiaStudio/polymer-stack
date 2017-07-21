import { Action } from 'redux';
import { store } from '../store';
import { AddFriend } from './actions';

class FriendInput extends Polymer.GestureEventListeners(Polymer.Element) {
  public static is = 'friend-input';

  public addFriend() {
    const field = this.$.field;
    const friend = field.value;
    if (friend) {
      store.dispatch(AddFriend({ friend }));
      field.value = null;
      field.focus();
    }
  }
}

window.customElements.define(FriendInput.is, FriendInput);
