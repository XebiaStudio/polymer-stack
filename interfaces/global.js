/* eslint-disable no-unused-vars */
import type { StoreEnhancer } from 'redux';

declare module HTMLImport {
  declare var exports: void;
}

declare module PolymerRedux {
  declare var exports: (store: Object) => void;
}

declare class PolymerElement extends HTMLElement {
  rootPattern: string,
  rootPath: string,
  $: Object,
}

declare var Polymer: {
  Element: Class<PolymerElement>,
};

declare var window: {
  customElements: CustomElementRegistry,
  __REDUX_DEVTOOLS_EXTENSION__: ?() => StoreEnhancer<*, *>,
};
