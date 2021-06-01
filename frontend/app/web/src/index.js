import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import FiltersProvider from "./context";
import { Provider } from "react-redux";
import { store } from "./lib/redux/reducers";

var client = new ApolloClient({
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
