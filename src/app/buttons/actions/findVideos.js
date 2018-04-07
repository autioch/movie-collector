import scanFolder from '../../../tools/input';

export default function findVideos(state, param, store) {
  scanFolder(state.settingValues.inputDirectory)
    .then((files) => store.setVideos(files).filterVideos());

  return {
    isLoading: true
  };
}