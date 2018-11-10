export default function toggleSettingsExpanded({ state: { settingsExpanded } }) {
  return {
    settingsExpanded: !settingsExpanded
  };
}
