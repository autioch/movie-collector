const querystring = require('querystring');
const getHash = require('./getHash');

module.exports = function getPostData(videoData) {
  return getHash(videoData).then((hash) => querystring.stringify({
    // 'mode': '32',
    // 'client': 'AutoMove',
    // 'client_ver': '1.0',
    // 'downloaded_subtitles_id': this.fileHash.hash,
    // 'downloaded_subtitles_txt': '2',
    // 'advert_type': 'flashAllowed',
    // 'video_info_hash': this.fileHash.hash,
    // 'nazwa_pliku': this.fileHash.file,
    // 'rozmiar_pliku_bajty': this.fileHash.bytes,
    // 'the': 'end'
    'downloaded_subtitles_lang': 'ENG',
    'downloaded_subtitles_txt': '1',
    'client_ver': '2.2.0.2399',
    'downloaded_subtitles_id': hash,
    'client': 'Napiprojekt',
    'mode': '1'
  }));
};
