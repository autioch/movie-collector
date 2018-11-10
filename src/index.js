import { createApp } from 'pipe-and-gauge';
import App from './app';
import initialState from './initialState';
import actions from './actions';
import './styles.scss';

const store = createApp(actions, initialState, App, document.getElementById('app-container'));

store.start();

// store.findVideos('D:\\videos');
