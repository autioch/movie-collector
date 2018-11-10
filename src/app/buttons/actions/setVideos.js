function flattenTree(videoTree) {
  return videoTree.reduce((arr, item) => {
    const content = item.isDirectory ? [item].concat(flattenTree(item.items)) : item;

    return arr.concat(content);
  }, []);
}

export default function setVideos({ data: videoTree }) {
  const videoList = flattenTree(videoTree);

  return {
    videoList,
    videoTree,
    isSearching: false
  };
}
