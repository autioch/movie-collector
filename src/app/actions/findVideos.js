import scanFolder from '../../tools/input';

export default function findVideos(stats, inputPath, store) {
  scanFolder(inputPath)
    .then((files) => store.setVideos(files).filterVideos());

  return {
    isLoading: true,
    inputPath
  };
}
