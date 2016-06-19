import './styles/index.scss';
import './header';
import listView from './list';
import './footer';
import './sidemenu';
import FolderCollection from './collection';


function renderList(data) {
  const collection = new FolderCollection(data.subFolders);
  listView.collection = collection;
  listView.render();
}

window
  .fetch('data/queryOmdb.json')
  .then(response => response.json())
  .then(renderList);
