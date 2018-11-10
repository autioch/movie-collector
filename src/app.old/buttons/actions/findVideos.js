import scanFolder from '../../../tools/findVideos';

export default function findVideos({ state, store }) {
  scanFolder()(state.settingValues.inputDirectory)
    .then((files) => store.setVideos(files).filterVideos());

  return {
    isLoading: true
  };
}
