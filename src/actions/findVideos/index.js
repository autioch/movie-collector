import scanFolder from './scanFolder';

export default function findVideos(stats, inputPath, store) {
  scanFolder(inputPath)
    .then((files) => {
      store.setVideos(files);
    });

  return {
    isLoading: true,
    inputPath
  };
}
