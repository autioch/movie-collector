export default function toggleValue({ state, data: id, store }) {
  store.setSettingValue({
    id,
    value: !state.settingValues[id]
  });
}
