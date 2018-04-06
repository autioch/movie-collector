import settingsActions from './settings/actions';
import genericActions from './actions/index';

console.log(settingsActions);
console.log(genericActions);

export default {
  ...settingsActions,
  ...genericActions
};
