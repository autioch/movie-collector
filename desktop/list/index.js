// const inputTool = require(`${__dirname}/list/input`);
// const { join } = require('path');
const tag = require('lean-tag');
const settings = require('electron-settings');

const container = document.body;

function renderVideo(video) {
  return tag('tr', [
    tag('td.folder', video.file.folder),
    tag('td.title', video.title, {
      title: video.title
    }),
    tag('td.extension', video.file.ext),
    tag('td.size', `${Math.floor(video.file.size / 1024)}kb`),
    tag('td.created', video.file.created.substr(0, 10))
  ]);
}

function renderSettings() {
  const prepareEl = tag('input', {
    checked: settings.get('prepare', false),
    type: 'checkbox',

    // C:\Users\autio\AppData\Roaming\your-app
    onchange: (ev) => settings.set('prepare', !!ev.target.checked)
  });

  container.appendChild(tag('table.settings', [
    tag('tr', [
      tag('td', 'Prepare folders'),
      tag('td', prepareEl)
    ])
  ]));
}

function renderVideos(videos) {
  container.appendChild(tag('table.list', videos.sort((a, b) => a.file.folder.localeCompare(b.file.folder)).map(renderVideo)));
}

require('fs').readFile('videos.json', 'utf8', (err, videosJson) => {
  renderSettings();
  renderVideos(JSON.parse(videosJson));
});

// inputTool([], {
//   inputPath: join('d:', 'videos')
// })
//   .then((videos) => {
//     // require('fs').writeFile('videos.json', JSON.stringify(videos, null, '  '), 'utf8', () => {});
//   });
