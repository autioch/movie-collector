import settings from './app/settings/definition';
import buttons from './app/buttons/definition';

export default {
  isLoading: false,
  videos: [],
  videosVisibleCount: 0,
  videosCount: 0,
  ...buttons,
  ...settings
};
