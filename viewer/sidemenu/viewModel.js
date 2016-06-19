import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: function() {
    return {
      isExpanded: false,
      subviews: new Backbone.Collection()
    };
  },
  toggleExpand: function() {
    this.set('isExpanded', !this.get('isExpanded'));
  },
  registerSubview(view) {
    this.get('subviews').add({
      view
    });
  }
});
