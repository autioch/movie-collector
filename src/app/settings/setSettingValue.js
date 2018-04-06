/* TODO This should force rechecking the videos */
export default function setSettingValue(state, { id, value }) {
  return {
    settingValues: {
      [id]: value
    }
  };
}
