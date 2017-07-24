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


declare module "*.html" {
    var html: number;
    export default html;
}
