import { store, type Friend, type AppState } from './redux-behaviour';

const reduxMixin = (superClass: Class<*>) =>
  class WithRedux extends superClass {
    onState: $Abstract<(state: AppState) => void>;

    unsubscribeRedux: () => void;
    constructor() {
      super();
      this.unsubscribeRedux = store.subscribe(() => {
        // $FlowIssue can't call abtract methods
        this.onState(store.getState());
      });
    }
    disconnectedCallback() {
      this.unsubscribeRedux();
    }
  };

class FriendList extends reduxMixin(Polymer.Element) {
  static is = 'friend-list';
  static is: string;

  friends: Friend[];

  onState = (state: AppState) => {
    Object.assign(this, { friends: state.friends });
  };
}

window.customElements.define(FriendList.is, FriendList);

export default FriendList;
