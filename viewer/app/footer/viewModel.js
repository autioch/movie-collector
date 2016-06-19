import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults() {
    return {
      subviews: new Backbone.Collection()
    };
  },
  registerSubview(view) {
    this.get('subviews').add({
      view
    });
  }
});
