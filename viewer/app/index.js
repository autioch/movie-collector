import listView from './list';
import './header';
import './footer';
import './sidemenu';
import './index.scss';

window
  .fetch('data/ffProbe.json')
  .then(response => response.json())
  .then(list => listView.render(list));
