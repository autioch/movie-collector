import './styles.scss';
import { App } from './components';
import actions from './actions';
import { app } from './core';
import initialState from './initialState';

const store = app(actions, initialState, App, document.getElementById('app-container'));

store.findVideos('D:\\videos\\teledyski');
