import './styles.scss';
import App from './app';
import actions from './app/actions';
import core from './core';
import initialState from './initialState';

const store = core.app(actions, initialState, App, document.getElementById('app-container'));

store.forceRender();

// store.findVideos('D:\\videos\\teledyski');
