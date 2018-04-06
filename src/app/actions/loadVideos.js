import fs from 'fs';

export default function loadVideos(state, param, actions) {
  fs.readFile(state.videosCachePath, 'utf8', (err, videosJson) => {
    if (err) {
      actions.setLoadingError(err);
    }

    actions.setVideos(JSON.parse(videosJson)).filterVideos();
  });

  return {
    isLoading: true
  };
}
