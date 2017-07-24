class MyApp extends Polymer.Element {
  public static readonly is = 'my-app';

  public static readonly properties = {
    page: {
      type: String,
      reflectToAttribute: true,
      observer: 'pageChanged',
    },
    rootPattern: String,
    routeData: Object,
    subroute: String,
  };

  public static readonly observers = ['routePageChanged(routeData.page)'];

  private rootPath: string;
  private rootPattern: string;
  private page: string;

  constructor() {
    super();

    // Get root pattern for app-route, for more info about `rootPath` see: https://www.polymer-project.org/2.0/docs/upgrade#urls-in-templates
    this.rootPattern = new URL(this.rootPath).pathname;
  }

  private routePageChanged(page?: string) {
    // Polymer 2.0 will call with `undefined` on initialization.
    // Ignore until we are properly called with a string.
    if (page === undefined) {
      return;
    }

    // If no page was found in the route data, page will be an empty string.
    // Deault to 'view1' in that case.
    this.page = page || 'view1';

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  private pageChanged(page: string) {
    switch (page) {
      case 'view1': {
        import(/* webpackChunkName: "view1" */ './my-view1.html');
        break;
      }
      case 'view2': {
        import(/* webpackChunkName: "view2" */ './my-view2.html');
        break;
      }
      case 'view3': {
        import(/* webpackChunkName: "view3" */ './my-view3.html');
        break;
      }
      case 'redux-demo': {
        import(/* webpackChunkName: "redux" */ './redux-demo.html');
        break;
      }
      default:
        import(/* webpackChunkName: "404" */ './my-view404.html');
        break;
    }
  }
}

window.customElements.define(MyApp.is, MyApp);
