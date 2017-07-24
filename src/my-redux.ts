/**
 * `my-redux`
 * Redux demo
 *
 * @polymer
 * @extends HTMLElement
 */
class MyRedux extends Polymer.Element {
  public static readonly is = 'my-redux';

  public static readonly properties = {
    prop1: {
      type: String,
      value: 'my-redux',
    },
  };
}

window.customElements.define(MyRedux.is, MyRedux);
