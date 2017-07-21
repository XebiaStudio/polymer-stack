import { Unsubscribe } from 'redux';
import { AppState, Friend } from './app-state';
import { store } from './redux-behaviour';

// const reduxMixin = (superClass) => {
//     return abstract class WithRedux extends superClass {
//       abstract onState(state: AppState);

//       unsubscribeRedux: () => void;
//       constructor() {
//         super();
//         this.unsubscribeRedux = store.subscribe(() => {
//           // $FlowIssue can't call abtract methods
//           this.onState(store.getState());
//         });
//       }

//       disconnectedCallback() {
//         this.unsubscribeRedux();
//       }
//     };
//   }

interface ReduxConnectable extends PolymerElement {
  onState(state: AppState): void;
}

interface ReduxConnectableClass {
  new (): ReduxConnectable;
}

class FriendList extends Polymer.Element implements ReduxConnectable {
  public static is = 'friend-list';

  private friends: Friend[];

  onState(state: AppState) {
    this.friends = state.friends;
  }
}

function WithRedux(Component: ReduxConnectableClass) {
  return class ConnectedComponent extends Component {
    private unsubscribe: () => void;

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
  };
}

window.customElements.define(FriendList.is, WithRedux(FriendList));
