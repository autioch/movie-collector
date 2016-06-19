import View from './view';
import ViewModel from './viewModel';

const model = new ViewModel();
const view = new View({
  model
});

view.render().$el.appendTo('.app-container');

export default model;
