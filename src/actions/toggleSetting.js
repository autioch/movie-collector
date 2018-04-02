export default function toggleSetting(state, param) {
  return {
    [param]: !state[param]
  };
}
