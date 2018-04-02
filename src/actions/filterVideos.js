export default function filterVideos({ videos, showOnlyProblems }) {
  if (showOnlyProblems) {
    videos.forEach((video) => {
      const { suggestion } = video;

      video.isVisible = suggestion.yearIsDifferent || suggestion.titleIsDifferent;
    });
  } else {
    videos.forEach((video) => {
      video.isVisible = true;
    });
  }

  return {
    videos,
    videosVisibleCount: videos.filter((video) => video.isVisible).length
  };
}
