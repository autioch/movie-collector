export default function setFullNameSuggestion({ state, data }) {
  const { itemId, suggestion } = data;

  return {
    videoList: state.videoList.map((item) => {
      if (item.id !== itemId) {
        return item;
      }

      item.suggestion = Object.assign({}, item.suggestion, {
        fullName: suggestion
      });

      return item;
    })
  };
}
