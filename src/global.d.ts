declare interface PolymerElement {
  new(): PolymerElement
  $: any;

  connectedCallback(): void;
  disconnectedCallback(): void;

}
// declare function PolymerElement(): void;

declare var Polymer: {
  Element: PolymerElement
  GestureEventListeners: (e: PolymerElement) => PolymerElement
};
// declare var PolymerApolloMixin: any;
// declare module 'polymer-apollo';
