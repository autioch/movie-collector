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
      resolve({
        error: `FS error: ${err.message}`
      });
    });

    file.on('finish', () => {
      resolve({
        ext: SUB_FORMAT,
        created: new Date().toJSON(),
        generated: new Date().toJSON()
      });
    });

    const buff = new Buffer(subtitle.content[0], 'base64');

    file.write(buff.toString('UTF-8'));
    file.end();
  });
};
