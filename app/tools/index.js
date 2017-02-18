/* List of all tools, that will be executed in order after each other. */
module.exports = [

  /* Prepare folders before anything else. */
  require('./prepare'),

  /* Get basic data. */
  require('./input'),

  /* Additional data. */
  require('./ffmpeg'),
  require('./omdb'),
  require('./napiproject'),

  /* Check collected data. */
  require('./validate'),

  /* Save raw data. */
  require('./output'),

  /* Output stat view. */
  require('./stat'),

  /* Output list view. */
  require('./list')
];
