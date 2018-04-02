import React from 'react';
import Toolbar from '../toolbar';
import List from '../list';
import Loader from '../loader';

import './styles.scss';

export default ({ state, store }) => (
  <div className="app">
    <Toolbar inputPath={state.inputPath} chooseInputPath={store.chooseInputPath} />
    <List videos={state.videos}/>
    {state.isLoading && <Loader />}
  </div>
);
