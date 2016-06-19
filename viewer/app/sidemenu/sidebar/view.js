import Backbone from 'backbone';
import './index.scss';
import markup from './markup.html';
import _ from 'lodash';

export default Backbone.View.extend({
  className: 'sidebar',
  template: _.template(markup),
  events: {
    'click .js-close': 'closeMenu'
  },
  initialize: function() {
    this.listenTo(this.model, 'change:isExpanded', this.updateExpand);
  },
  render: function() {
    this.$el.html(this.template());
    this.updateExpand(this.model);
    return this;
  },
  updateExpand: function(model) {
    this.$el.toggleClass('is-expanded', model.get('isExpanded'));
  },
  closeMenu: function() {
    this.model.set('isExpanded', false);
  }
});
