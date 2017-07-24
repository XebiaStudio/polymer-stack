import { Store } from 'redux';
import { store } from './store';
import { AppState } from './types';

/* tslint:disable:variable-name */
export let PolymerRedux: (store: Store<AppState>) => Object;

export interface ReduxConnectable extends PolymerElement {
  onState(state: AppState): void;
}

interface ReduxConnectableClass {
  new (): ReduxConnectable;
}

export function connect(component: ReduxConnectableClass) {
  return class ConnectedComponent extends component {
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
