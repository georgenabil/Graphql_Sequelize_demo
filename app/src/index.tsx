import * as React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import Root from "./components/Root";
import graphqlClinet from "./api/graphql";

render(
  <ApolloProvider client={graphqlClinet}>
    <Root />
  </ApolloProvider>,

  document.getElementById("app")
);
