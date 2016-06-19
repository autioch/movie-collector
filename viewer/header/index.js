import View from './view';
import ViewModel from './viewModel';

const model = new ViewModel();
const view = new View({
  model
});

view.render().$el.prependTo('.app-container');

export default model;
