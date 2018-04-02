import React from 'react';
import List from '../list';
import Loader from '../loader';

// import Settings from '../settings';
import Toolbar from '../toolbar';

import './styles.scss';

export default ({ state, store }) => (
  <div className="app">
    <Toolbar
      inputPath={state.inputPath}
      videosCount={state.videosCount}
      videosVisibleCount={state.videosVisibleCount}
      showOnlyProblems={state.showOnlyProblems}
      chooseInputPath={store.chooseInputPath}
      toggleShowOnlyProblems={store.toggleShowOnlyProblems}
    />
    {/* <Settings /> */}
    <List
      videos={state.videos.filter((video) => video.isVisible)}
      setTitleSuggestion={store.setTitleSuggestion}
      setYearSuggestion={store.setYearSuggestion}
    />
    {state.isLoading && <Loader />}
  </div>
);
