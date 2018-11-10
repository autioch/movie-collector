import querystring from 'querystring';
import parse from './parse';
import request from './request';

const OMDB_URL = 'http://www.omdbapi.com/?';

function getUrl(videoData) {
  const { title, year } = videoData;
  const params = {
    plot: 'short',
    r: 'json',
    type: 'movie',
    t: title.replace('  ', '+')
  };

  if (year) {
    params.y = year;
  }

  return OMDB_URL + querystring.stringify(params);
}

export default function setup() {
  return function tool(video) {
    const url = getUrl(video);

    return request(url).then((omdbData) => ({
      ...parse(omdbData),
      url
    }));
  };
}
