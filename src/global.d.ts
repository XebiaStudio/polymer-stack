interface PolymerElement {
  new (): PolymerElement;
  $: any;
  connectedCallback(): void;
  disconnectedCallback(): void;
}

declare var Polymer: {
  Element: PolymerElement;
  GestureEventListeners: (e: PolymerElement) => PolymerElement;
};

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
