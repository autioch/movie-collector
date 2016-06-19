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
    const subviews = this.model.get('subviews');
    this
      .listenTo(this.model, 'change:isExpanded', this.updateExpand)
      .listenTo(subviews, 'add', this.renderSubview)
      .listenTo(subviews, 'remove', this.removeSubview);
  },
  render: function() {
    this.$el.html(this.template());
    this.updateExpand(this.model);
    this.renderSubviews();
    return this;
  },
  updateExpand: function(model) {
    this.$el.toggleClass('is-expanded', model.get('isExpanded'));
  },
  closeMenu: function() {
    this.model.set('isExpanded', false);
  },
  renderSubviews() {
    this.model.get('subviews').forEach(model => this.renderSubview(model));
  },
  renderSubview(model) {
    const view = model.get('view');
    this.$('.js-subviews').append(view.$el);
    view.render();
  },
  removeSubview(model) {
    model.get('view').remove();
  }
});
