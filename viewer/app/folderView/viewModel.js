import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: function() {
    return {
      isExpanded: false
    };
  },
  toggleExpanded: function() {
    this.set('isExpanded', !this.get('isExpanded'));
  }
});
