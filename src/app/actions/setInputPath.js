export default function setInputPath(state, inputPath, actions) {
  if (inputPath === state.inputPath) {
    return {};
  }

  actions.findVideos(inputPath);

  return {};
}
