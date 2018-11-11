function reduceChars(chars) {
  return chars.reduce((arr, char) => {
    const prev = arr[arr.length - 1];

    if (prev && (prev.type === char.type)) {
      prev.content = `${prev.content}${char.content}`;

      return arr;
    }

    return arr.concat(char);
  }, []);
}

function prepareIsSame(ignoreCamelCase) {
  if (ignoreCamelCase) {
    return (charA, charB) => charA.toLowerCase() === charB.toLowerCase();
  }

  return (charA, charB) => charA === charB;
}

export default function getDiff(original, suggestion, itemId, ignoreCamelCase) {
  const matchLength = Math.min(original.length, suggestion.length);
  const items = [];
  const isSame = prepareIsSame(ignoreCamelCase);

  for (let i = 0; i < matchLength; i++) {
    items.push({
      type: isSame(original[i], suggestion[i]) ? 'same' : 'different',
      content: suggestion[i]
    });
  }

  const markers = reduceChars(items);

  markers.forEach((item, index) => {
    item.id = `${itemId}__${index}`;
  });

  if (suggestion.length > original.length) {
    return markers.concat({
      id: `${itemId}__add`,
      type: 'add',
      content: suggestion.slice(matchLength)
    });
  }

  if (suggestion.length < original.length) {
    return markers.concat({
      id: `${itemId}__remove`,
      type: 'remove',
      content: original.slice(matchLength)
    });
  }

  return markers;
}
