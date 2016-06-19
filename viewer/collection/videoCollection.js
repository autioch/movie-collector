import Backbone from 'backbone';
import VideoModel from './videoModel';

export default Backbone.Collection.extend({
  model: VideoModel
});
