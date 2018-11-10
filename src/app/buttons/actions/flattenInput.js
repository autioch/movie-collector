export default function flattenInput(items) {
  return items.reduce((arr, item) => {
    const content = item.isDirectory ? [item].concat(flattenInput(item.items)) : item;

    return arr.concat(content);
  }, []);
}
