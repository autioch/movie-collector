import getPostData from './getPostData';
import getHash from './getHash';
import querystring from 'querystring';

export default function prepareRequest(videoData) {
  return getHash(videoData).then((hash) => {
    const postData = querystring.stringify(getPostData(videoData, hash));

    return {
      postData,
      options: {
        host: 'www.napiprojekt.pl',
        port: '80',
        path: '/api/api-napiprojekt3.php',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData)
        }
      }
    };
  });
}
