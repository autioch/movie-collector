/* Parameters set based on program tcp communication sniffed with Wireshark. */

module.exports = function getPostData(videoData, hash) {
  return {
    downloaded_subtitles_lang: 'ENG',
    downloaded_subtitles_txt: '1',
    client_ver: '2.2.0.2399',
    downloaded_subtitles_id: hash,
    client: 'Napiprojekt',
    mode: '1'
  };

  // return {
  //   mode: '1', // '31',
  //   client: 'NapiProjekt',
  //   client_ver: '2.2.0.2399',
  //   // user_nick: '',
  //   // user_password: '',
  //   // downloaded_subtitles_id: hash,
  //   downloaded_subtitles_lang: 'ENG',
  //   // downloaded_cover_id: '',
  //   // advert_type: 'flashAllowed',
  //   // video_info_hash: hash,
  //   // video_info_hash2: hash,
  //   nazwa_pliku: `${videoData.title}.${videoData.file.ext}`,
  //   rozmiar_pliku_bajty: videoData.file.size,
  //   // rozmiar_pliku_z_jednostka: '',
  //   format: videoData.ffmpeg.formatLongName.split(' / ')[0].trim(),
  //   // czas_trwania_ms: '6636768',
  //   // czas_trwania_sformatowany: '01:50:36.768',
  //   // calkowite_bitrate: '',
  //   // calkowite_bitrate_sformatowane: '',
  //   // video_codec: videoData.ffmpeg.video[0].codecName,
  //   // video_bitrate: videoData.ffmpeg.bitrate,
  //   video_bitrate_sformatowane: '',
  //   video_rozdz_X: videoData.ffmpeg.video[0].width,
  //   video_rozdz_Y: videoData.ffmpeg.video[0].height,
  //   // video_display_aspect_ratio: videoData.ffmpeg.video[0].displayAspectRatio, // normalize - second value = 1?
  //   video_fps: videoData.ffmpeg.video[0].fps,
  //   video_calkowita_liczba_klatek: '',
  //   video_rozmiar_bajty: '',
  //   video_rozmiar_sformatowany: '',
  //   video_proporcje: videoData.ffmpeg.video[0].displayAspectRatio, // normalize - second value = 1?, same as first one
  //   // audio_format: '',
  //   // audio_format_info: '',
  //   // audio_bitrate: '',
  //   // audio_bitrate_sformatowane: '',
  //   audio_kanaly_liczba: videoData.ffmpeg.audio[0].channels,
  //   // audio_sampling_rateKHZ: '',
  //   audio_resolution_sformatowane: '',
  //   audio_rozmiar_bajty: '',
  //   audio_rozmiar_bajty_sformatowane: '',
  //   the: 'end'
  // };
};
