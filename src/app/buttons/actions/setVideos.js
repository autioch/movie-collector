import suggestRename from '../../../tools/suggestRename';

export default function setVideos(state, videos) {
  videos.forEach((video) => {
    if (!video.isFile) {
      return;
    }

    const suggestion = suggestRename(video.file.title);

    suggestion.yearIsDifferent = suggestion.year !== video.file.year;
    suggestion.titleIsDifferent = suggestion.title !== video.file.title;

    video.suggestion = suggestion;
  });

  return {
    videos,
    videosCount: videos.length,
    isLoading: false
  };
}
