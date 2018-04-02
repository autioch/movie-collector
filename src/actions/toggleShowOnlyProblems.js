export default function toggleShowOnlyProblems(state, param, store) {
  store
    .toggleSetting('showOnlyProblems')
    .filterVideos();
}
