import './styles.scss';
import App from './app';
import actions from './app/actions';
import { createApp } from 'pipe-and-gauge';
import initialState from './initialState';
import settings from 'electron-settings';

const VALUES_KEY = 'settingValues';

Object.assign(initialState[VALUES_KEY], settings.get(VALUES_KEY) || {});

const store = createApp(actions, initialState, App, document.getElementById('app-container'));

store.start();
store.subscribe((state) => settings.set(VALUES_KEY, state[VALUES_KEY]));

// store.findVideos('D:\\videos');
