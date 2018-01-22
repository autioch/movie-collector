import React, { Component } from 'react';
import Toolbar from '../toolbar';
import List from '../list';
import Loader from '../loader';
import getVideos from '../input';

import './styles.scss';

const BOUND_METHODS = ['setInputPath', 'setVideos'];

export default class App extends Component {
  constructor(props) {
    super(props);
    BOUND_METHODS.forEach((method) => {
      this[method] = this[method].bind(this);
    });
    this.state = {
      inputPath: '',
      videos: props.videos,
      loadingPromise: null
    };
  }

  setInputPath(inputPath) {
    if (inputPath === this.state.inputPath) {
      return;
    }

    if (this.state.loadingPromise) {
      this.state.loadingPromise.abort();
    }

    this.setState({
      inputPath,
      videos: [],
      loadingPromise: getVideos([], {
        inputPath
      }).then(this.setVideos)
    });
  }

  setVideos(videos) {
    this.setState({
      videos,
      loadingPromise: null
    });
  }

  render() {
    const { loadingPromise, videos, inputPath } = this.state;

    return (
      <div className="app">
        <Toolbar inputPath={inputPath} setInputPath={this.setInputPath} />
        <List videos={videos}/>
        {loadingPromise && <Loader />}
      </div>
    );
  }
}
