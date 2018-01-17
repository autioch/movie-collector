const fs = require('fs');
const path = require('path');

const SUB_FORMAT = 'srt';

module.exports = function saveSubtitles(videoData, subtitle) {
  const { file: { folder, name, ext } } = videoData;
  const fullName = path.join(folder, name);
  const subsFilename = `${fullName.slice(0, -ext.length)}${SUB_FORMAT}`;

  return new Promise((resolve) => {
    const file = fs.createWriteStream(subsFilename);

    file.on('error', (err) => {
      videoData.subs.error = `FS error: ${err.message}`;
      resolve(videoData);
    });
    file.on('finish', () => {
      videoData.subs.ext = SUB_FORMAT;
      videoData.subs.created = new Date().toJSON();
      videoData.subs.generated = new Date().toJSON();
      resolve(videoData);
    });
    const buff = new Buffer(subtitle.content[0], 'base64');

    file.write(buff.toString('UTF-8'));
    file.end();
  });
};
