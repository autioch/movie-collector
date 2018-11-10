/* eslint no-process-env: 0 */
import { join } from 'path';
import bluebird from 'bluebird';
import parse from './parse';
import { ffprobe } from 'fluent-ffmpeg';

const ffProbeAsync = bluebird.promisify(ffprobe);

export default function setup(ffmpegPath) {
  /* Fluent ffmpeg requires these. */
  process.env.FFMPEG_PATH = join(ffmpegPath, 'bin', 'ffmpeg.exe');
  process.env.FFPROBE_PATH = join(ffmpegPath, 'bin', 'ffprobe.exe');

  return (video) => ffProbeAsync(video).then(parse);
}
