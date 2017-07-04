class MyView1 extends Polymer.Element {
  static get is() { return 'my-view1'; }

  connectedCallback() {
  }
}

window.customElements.define(MyView1.is, MyView1);
