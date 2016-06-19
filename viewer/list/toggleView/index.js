import template from 'lodash.template';
import markup from './markup.html';
import Backbone from 'backbone';
import './index.scss';

const compiled = template(markup);

export default Backbone.View.extend({
  events: {
    'click': 'onToggle'
  },
  render() {
    this.$el.html(compiled(this.model.toView()));
    return this;
  },
  onToggle() {
    this.model.toggleExpanded();
  }

});
