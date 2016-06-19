import IconView from './icon/view';
import SidebarView from './sidebar/view';
import ViewModel from './viewModel';

const viewModel = new ViewModel();

const iconView = new IconView({
  model: viewModel
}).render().$el.appendTo('.js-sidebar-placeholder');

const sidebarView = new SidebarView({
  model: viewModel
}).render().$el.appendTo('.app-container');
