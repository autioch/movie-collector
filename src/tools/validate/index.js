import workers from './workers';

function validateVideo(video) {
  return workers
    .reduce((errors, worker) => errors.concat(worker(video)), [])
    .filter((error) => !!error);
}

export default function setup() {
  return (video) => Promise.resolve(validateVideo(video));
}
