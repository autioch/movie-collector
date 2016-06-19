import Backbone from 'backbone';
import FolderView from './folderView';
import './index.scss';

export default Backbone.View.extend({
  className: 'list',
  itemHeight: 30,
  render: function() {
    this.$el.empty();

    this.collection
      .map(model => new FolderView({
        model
      }))
      .forEach(view => view.render().$el.appendTo(this.$el));
    return this;
  }
});
