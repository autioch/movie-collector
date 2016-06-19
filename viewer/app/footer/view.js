import Backbone from 'backbone';
import './index.scss';
import markup from './markup.html';
import _ from 'lodash';

export default Backbone.View.extend({
  className: 'footer',
  template: _.template(markup),
  events: {
    click: 'toggleMenu'
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  toggleMenu: function() {
    this.model.toggleExpand();
  }
});
