import template from 'lodash.template';
import markup from './markup.html';
import Backbone from 'backbone';
import folderToView from './folderToView';
import './index.scss';

const compiled = template(markup);

export default Backbone.View.extend({
  events: {
    'click': 'onToggle'
  },
  initialize(options) {
    this.folder = options.folder;
  },
  render() {
    this.$el.html(compiled({
      folder: folderToView(this.folder)
    }));
    return this;
  },
  onToggle() {
    this.model.toggleExpanded();
  }

});
