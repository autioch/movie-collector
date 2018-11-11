export default function toggleIgnoreCamelCase({ state }) {
  return {
    ignoreCamelCase: !state.ignoreCamelCase
  };
}
