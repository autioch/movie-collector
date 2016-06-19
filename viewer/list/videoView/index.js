import template from 'lodash.template';
import markup from './markup.html';
import Backbone from 'backbone';
import './index.scss';

const compiled = template(markup);

export default Backbone.View.extend({
  className: 'video-view',
  render() {
    this.$el.html(compiled({
      video: this.model.toView()
    }));
    return this;
  }
});
