import buttonsActions from './app/buttons/actions';
import settingsActions from './app/settings/actions';

export default {
  ...buttonsActions,
  ...settingsActions,
  start() {} // eslint-disable-line no-empty-function
};
