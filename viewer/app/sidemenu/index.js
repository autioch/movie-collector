import IconView from './icon/view';
import SidebarView from './sidebar/view';
import ViewModel from './viewModel';
import Header from '../header';

const viewModel = new ViewModel();

const iconView = new IconView({
  model: viewModel
});
Header.registerSubview(iconView);

new SidebarView({
  model: viewModel
}).render().$el.appendTo('body');
