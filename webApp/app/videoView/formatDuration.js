export default function formatDuration(duration) {
  const time = parseInt(duration, 10);
  const totalMinutes = Math.floor(time / 60);
  // const hours = Math.ceil(totalMinutes / 60);
  // const minutes = totalMinutes - hours * 60;
  return `${totalMinutes}min`;
}
