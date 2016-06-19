import IconView from './icon/view';
import SidebarView from './sidebar/view';
import ViewModel from './viewModel';
import Header from '../header';

const model = new ViewModel();

Header.registerSubview(new IconView({
  model
}));

const view = new SidebarView({
  model
});
view.render().$el.appendTo('body');

export default model;
