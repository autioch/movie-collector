function isObject(obj) {
  return obj && obj.constructor === Object;
}

function recreate(obj) {
  return Object.assign({}, obj);
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function merge(state, change) {
  const props = Object.keys(change);

  for (let index = 0; index < props.length; index++) {
    const key = props[index];
    const value = change[key];
    const old = state[key];

    state[key] = isObject(old) && isObject(value) ? recreate(merge(old, value)) : value;
  }

  return state;
}

export { isObject, recreate, clone, merge };
