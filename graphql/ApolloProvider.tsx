"use client";
import { ApolloProvider as ACApolloProvider } from "@apollo/client";
import { FC, ReactNode } from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://dev2-sz-gql-gateway.herokuapp.com/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const ApolloProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ACApolloProvider client={client}>{children}</ACApolloProvider>;
};

export default ApolloProvider;
