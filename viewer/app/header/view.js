import Backbone from 'backbone';
import './index.scss';
import markup from './markup.html';
import _ from 'lodash';

export default Backbone.View.extend({
  className: 'header',
  template: _.template(markup),
  initialize() {
    const subviews = this.model.get('subviews');
    this
      .listenTo(subviews, 'add', this.renderSubview)
      .listenTo(subviews, 'remove', this.removeSubview);
  },
  render() {
    this.$el.html(this.template());
    this.renderSubviews();
    return this;
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
