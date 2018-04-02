export default function subscription(store) {
  let notifyTimeout = null;
  const listeners = [];

  function notifyListeners() {
    notifyTimeout = null;

    const state = store.getState();

    listeners.forEach((listener) => listener(state, store));
  }

  function notify() {
    if (notifyTimeout) {
      return;
    }
    notifyTimeout = setTimeout(notifyListeners);
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    subscribe,
    notify
  };
}
