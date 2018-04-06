import suggestRename from '../../../tools/suggestRename';

export default function setVideos(state, videos) {
  videos.forEach((video) => {
    const suggestion = suggestRename(video.title);

    suggestion.yearIsDifferent = suggestion.year !== video.year;
    suggestion.titleIsDifferent = suggestion.title !== video.title;

    video.suggestion = suggestion;
  });

  return {
    videos,
    videosCount: videos.length,
    isLoading: false
  };
}
