import template from 'lodash.template';
import markup from './markup.html';
import Backbone from 'backbone';
import VideoView from '../videoView';
import ToggleView from '../toggleView';
import ViewModel from './viewModel';
import './index.scss';

const compiled = template(markup);

const FolderView = Backbone.View.extend({
  className: 'folder-view',
  initialize(folder, isExpanded = false) {
    this.viewModel = new ViewModel({
      isExpanded
    });
    this.folder = folder;
    this.subFolderViews = [];
    this.videoViews = [];
    this.toggleView = null;
    this.listenTo(this.viewModel, 'change:isExpanded', this.toggleSubviews);
  },
  render() {
    this.removeSubviews();
    this.toggleView && this.toggleView.remove();
    this.$el.html(compiled());
    this.toggleView = new ToggleView({
      el: this.$('.js-toggle'),
      folder: this.folder,
      model: this.viewModel
    }).render();
    this.toggleSubviews(this.viewModel);
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
    if (this.folder.subFolders) {
      const container = this.$('.js-subfolders');
      this.subFolderViews = this.folder.subFolders.map(subfolder => new FolderView(subfolder));
      this.subFolderViews.forEach(subView => container.append(subView.render().$el));
    }
    if (this.folder.videos) {
      const container = this.$('.js-videos');
      this.videoViews = this.folder.videos.map(video => new VideoView(video));
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
