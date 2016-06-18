import FolderView from './folderView';
import VideoView from './videoView';
import $ from 'jquery';

const BODY = $('body');

function renderList(list) {
  $('.js-loader').remove();
  list.subFolders && list.subFolders.forEach(function(folder) {
    BODY.append(new FolderView(folder).render().$el);
  });
  list.videos && list.videos.forEach(function(video) {
    BODY.append(new VideoView(video).render().$el);
  });
}

window.fetch('queryOmdb.json')
  .then(response => response.json())
  .then(renderList);
