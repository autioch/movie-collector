import React from 'react';
import Settings from './settings';
import Buttons from './buttons';
import List from './list';
import Loader from './loader';

import './styles.scss';

export default ({ state, store }) => (
  <div className="app">
    <Settings state={state} store={store} />
    <Buttons state={state} store={store} />
    <List
      videos={state.videos.filter((video) => video.isVisible)}
      settingValues={state.settingValues}
      setTitleSuggestion={store.setTitleSuggestion}
      setYearSuggestion={store.setYearSuggestion}
    />
    {state.isLoading && <Loader />}
  </div>
);
