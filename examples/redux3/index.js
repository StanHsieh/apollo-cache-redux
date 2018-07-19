import { ReduxCache, apolloReducer } from 'apollo-cache-redux';
import { createStore, combineReducers } from 'redux';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';

const store = createStore(
  combineReducers({
    apollo: apolloReducer
  })
);

const cache = new ReduxCache({ store });

const client = new ApolloClient({
  link: new HttpLink(),
  cache
});
