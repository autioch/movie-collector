import template from 'lodash.template';
import markup from './markup.html';
import Backbone from 'backbone';
import videoToView from './videoToView';
import './index.scss';

const compiled = template(markup);

export default Backbone.View.extend({
  className: 'video-view',
  initialize(video) {
    this.video = video;
  },
  render() {
    this.$el.html(compiled({
      video: videoToView(this.video)
    }));
    return this;
  }
});
