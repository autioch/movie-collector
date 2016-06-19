import Backbone from 'backbone';
import FolderView from './folderView';
import VideoView from './videoView';
import './index.scss';

export default Backbone.View.extend({
  className: 'list',
  render: function(list) {
    this.$el.empty();
    var $el = this.$el;

    list.subFolders && list.subFolders.forEach(function(folder) {
      $el.append(new FolderView(folder).render().$el);
    });
    list.videos && list.videos.forEach(function(video) {
      $el.append(new VideoView(video).render().$el);
    });
    return this;
  }
});
