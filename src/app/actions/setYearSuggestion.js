export default function setYearSuggestion({ state: { videos }, data: { id, year } }) {
  return {
    videos: videos.map((video) => {
      if (video.id === id) {
        return {
          ...video,
          suggestion: {
            ...video.suggestion,
            year
          }
        };
      }

      return video;
    })
  };
}
