import buttonsActions from './app/buttons/actions';
import listActions from './app/list/actions';
import settingsActions from './app/settings/actions';

export default {
  ...buttonsActions,
  ...listActions,
  ...settingsActions,
  start() {} // eslint-disable-line no-empty-function
};
