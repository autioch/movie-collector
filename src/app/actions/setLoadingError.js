export default function setLoadingError(state, err) {
  return {
    loadingError: err.message
  };
}
