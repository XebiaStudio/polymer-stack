/**
 * `my-redux`
 * Redux demo
 *
 * @polymer
 * @extends HTMLElement
 */
class MyRedux extends Polymer.Element {
  static get is() {
    return 'my-redux';
  }

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
