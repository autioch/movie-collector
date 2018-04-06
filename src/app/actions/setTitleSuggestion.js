export default function setTitleSuggestion({ videos }, { id, title }) {
  return {
    videos: videos.map((video) => {
      if (video.id === id) {
        return {
          ...video,
          suggestion: {
            ...video.suggestion,
            title
          }
        };
      }

      return video;
    })
  };
}
