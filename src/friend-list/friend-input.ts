import { Friend } from '../types';
import { Action } from 'redux';
import { store } from '../store';
import { addFriend } from './actions';

class FriendInput extends Polymer.GestureEventListeners(Polymer.Element) {
  public static is = 'friend-input';

  public addFriend() {
    const field: HTMLInputElement = this.$.field;
    const name = field.value;
    if (name) {
      store.dispatch(addFriend({ name }));
      field.value = '';
      field.focus();
    }
  }
}

window.customElements.define(FriendInput.is, FriendInput);
