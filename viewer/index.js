import './styles/index.scss';
import './header';
import listView from './list';
import './footer';
import './sidemenu';


function renderList(data) {
  listView.collection.reset(data.subFolders);
  listView.render();
}

window
  .fetch('data/queryOmdb.json')
  .then(response => response.json())
  .then(renderList);
