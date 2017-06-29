/* eslint-disable no-unused-vars */
declare module HTMLImport {
  declare var exports: void;
}

declare module PolymerRedux {
  declare var exports: (store: Object) => void;
}

declare class PolymerElement {
  rootPattern: string,
  rootPath: string,
  $: { [string]: Object },
}

declare var Polymer: {
  Element: Class<PolymerElement>,
};
