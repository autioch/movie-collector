export default function toggleValue(state, id, store) {
  store.setSettingValue({
    id,
    value: !state.settingValues[id]
  });
}
