import './styles.scss';
import App from './app';
import actions from './app/actions';
import core from './core';
import initialState from './initialState';
import settings from 'electron-settings';

const VALUES_KEY = 'settingValues';

Object.assign(initialState[VALUES_KEY], settings.get(VALUES_KEY) || {});

const store = core.app(actions, initialState, App, document.getElementById('app-container'));

store.forceRender();

store.subscribe((state) => settings.set(VALUES_KEY, state[VALUES_KEY]));

// store.findVideos('D:\\videos\\teledyski');
