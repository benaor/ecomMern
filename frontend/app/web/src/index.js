import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./lib/redux/reducers";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import FiltersProvider from "./context";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <FiltersProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </FiltersProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
