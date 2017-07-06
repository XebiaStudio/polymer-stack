import gql from 'graphql-tag';
import { PolymerApolloMixin } from 'polymer-apollo';
import {apolloClient} from './config';

class GraphQLDemo extends PolymerApolloMixin({apolloClient}, Polymer.Element) {
  public static is = 'graphql-demo';

  public static properties = {
    hello: {
      type: String,
    },
  };

  private hello: string;

  public async connectedCallback() {
    const q = gql`
      query {
        userOne: user(name: "dagon") {
          name
          id
        }
        userTwo: user(name: "blin") {
          name
          id
        }
        hello
      }
    `;

    const result = await apolloClient.query({
      query: q,
    });

    this.hello = (result.data as any).hello as string;
  }
}

window.customElements.define(GraphQLDemo.is, GraphQLDemo);
