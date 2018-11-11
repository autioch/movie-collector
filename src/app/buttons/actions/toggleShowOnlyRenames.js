export default function toggleShowOnlyRenames({ state }) {
  return {
    showOnlyRenames: !state.showOnlyRenames
  };
}
