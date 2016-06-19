import template from 'lodash.template';
import markup from './markup.html';
import Backbone from 'backbone';
import VideoView from '../videoView';
import ToggleView from '../toggleView';
import './index.scss';

const FolderView = Backbone.View.extend({
  className: 'folder-view',
  template: template(markup),
  initialize() {
    this.subFolderViews = [];
    this.videoViews = [];
    this.toggleView = null;
    this.listenTo(this.model, 'change:isExpanded', this.toggleSubviews);
  },
  render() {
    this.removeSubviews();
    this.toggleView && this.toggleView.remove();
    this.$el.html(this.template());
    this.toggleView = new ToggleView({
      el: this.$('.js-toggle'),
      model: this.model
    }).render();
    this.toggleSubviews(this.model);
    return this;
  },
  toggleSubviews(model) {
    const isExpanded = model.get('isExpanded');
    if (isExpanded) {
      this.renderSubViews();
    } else {
      this.removeSubviews();
    }
    this.$el.toggleClass('is-expanded', !!isExpanded).siblings().removeClass('is-expanded');
  },
  renderSubViews() {
    this.removeSubviews();
    const subFolders = this.model.get('subFolders');
    if (subFolders.length) {
      const container = this.$('.js-subfolders');
      this.subFolderViews = subFolders.map(model => new FolderView({
        model
      }));
      this.subFolderViews.forEach(subView => container.append(subView.render().$el));
    }
    const videos = this.model.get('videos');
    if (videos.length) {
      const container = this.$('.js-videos');
      this.videoViews = videos.map(model => new VideoView({
        model
      }));
      this.videoViews.forEach(subView => container.append(subView.render().$el));
    }
  },
  removeSubviews() {
    if (this.subFolderViews) {
      this.subFolderViews.forEach(view => view.remove());
      this.subFolderViews = [];
    }
    if (this.videoViews) {
      this.videoViews.forEach(view => view.remove());
      this.videoViews = [];
    }
  }
});

export default FolderView;
