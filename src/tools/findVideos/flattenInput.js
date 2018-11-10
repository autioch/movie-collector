/* eslint-disable no-use-before-define */
import { join } from 'path';

let nextId = 1;

function setId(item) {
  if (item.isFile || item.isDirectory) {
    item.id = join(item.folderPath, item.itemName);
  } else {
    item.id = nextId++;
  }
}

function flattenItem(item, depth) {
  setId(item);

  item.depth = depth;

  if (item.isDirectory) {
    return [item].concat(flattenInput(item.items, depth + 1));
  }

  return item;
}

export default function flattenInput(items, depth = 0) {
  return items.reduce((arr, item) => arr.concat(flattenItem(item, depth)), []);
}
