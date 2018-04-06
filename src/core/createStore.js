import { merge, clone } from './utils';
import subscription from './subscription';

export default function createStore(actions, initialState = {}) {
  const state = clone(initialState);
  const store = {};
  const { subscribe, notify } = subscription(store);

  store.subscribe = subscribe;
  store.getState = () => state;
  store.forceRender = notify;

  const wireAction = (action) => (data) => { // eslint-disable-line id-blacklist
    merge(state, action(state, data, store) || {});
    notify();

    /* Return store so we can chain actions, as an alternative to composition. */
    return store;
  };

  Object.entries(actions).forEach(([actionName, action]) => {
    store[actionName] = wireAction(action);
  });

  return Object.freeze(store);
}
