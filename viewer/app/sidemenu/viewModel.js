import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: function() {
    return {
      isExpanded: false
    };
  },
  toggleExpand: function() {
    this.set('isExpanded', !this.get('isExpanded'));
  }
});
