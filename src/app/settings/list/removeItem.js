export default function removeItem({ state, data: { id, item }, store }) {
  store.setSettingValue({
    id,
    value: state.settingValues[id].filter((ite) => ite !== item)
  });
}
