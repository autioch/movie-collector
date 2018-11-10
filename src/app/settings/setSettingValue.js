/* TODO This should force rechecking the videos */
export default function setSettingValue({ data: { id, value } }) {
  return {
    settingValues: {
      [id]: value
    }
  };
}
