import listView from './list';
import './topmenu';
import './footer';
// import './sidemenu';
import './index.scss';

window
  .fetch('data/queryOmdb.json')
  .then(response => response.json())
  .then(list => listView.render(list));
