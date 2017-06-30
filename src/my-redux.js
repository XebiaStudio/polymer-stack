/**
 * `my-redux`
 * Redux demo
 *
 * @customElement
 * @polymer
 * @polymerElement
 * @demo demo/index.html
 * @memberof Polymer
 */
class MyRedux extends Polymer.Element {
  static get is() {
    return 'my-redux';
  }
  static is: string;

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-redux',
      },
    };
  }
}

window.customElements.define(MyRedux.is, MyRedux);
