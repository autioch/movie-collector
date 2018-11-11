import findVideosTool from '../../../tools/findVideos';

const finder = findVideosTool();

export default function findVideos({ state, store }) {
  finder(state.inputDirectory).then((files) => store.setVideoTree(files).setVideoList());

  return {
    videoList: [],
    videoTree: [],
    isSearching: true
  };
}
