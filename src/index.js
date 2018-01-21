import App from './app';
import React from 'react';
import { render } from 'react-dom';
import { join } from 'path';

require('fs').readFile(join('.', 'src', 'videos.json'), 'utf8', (err, videosJson) => {
  if (err) {
    console.log(err.message);
  }
  const videos = JSON.parse(videosJson);

  render(<App videos={videos} />, document.body.querySelector('.app'));
});
