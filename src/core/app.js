import React from 'react';
import { render } from 'react-dom';
import createStore from './createStore';

export default function app(actions, initialState, View, el) {
  const store = createStore(actions, initialState);

  store.subscribe((state, _store) => render(<View state={state} store={_store}/>, el));

  return store;
}
