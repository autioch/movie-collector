import ListView from './view';
import FolderCollection from 'collection';

const listView = new ListView({
  collection: new FolderCollection()
});

listView.$el.appendTo('.app-container');

export default listView;
