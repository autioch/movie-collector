'use strict';

let dbSave = requireFrom('app/dbSave');

function statFloatArray(floatArray, title) {
  let min = floatArray[0];
  let max = 0;
  let sum = 0;
  let dict = {};

  floatArray
    .sort(function (a, b) {
      let floatA = parseFloat(a);
      let floatB = parseFloat(b);
      return floatA > floatB ? 1 : (floatB > floatA ? -1 : 0);
    })
    .forEach(function (value) {
      let num = parseFloat(value);
      let numString = num.toString();
      if (!isNaN(num)) {
        if (min > num) {
          min = num;
        }
        if (max < num) {
          max = num;
        }
        sum += num;
        if (dict.hasOwnProperty(numString)) {
          dict[numString]++;
        } else {
          dict[numString] = 1;
        }
      }
    });

  let dividend = 0;
  let divider = 0;


  let keys = Object.keys(dict);
  let keysSum = 0;

  let bottom = {
    key: keys[0],
    value: dict[keys[0]]
  };
  let top = {
    key: keys[0],
    value: dict[keys[0]]
  };
  keys.forEach(function (key) {
    let value = dict[key];
    if (top.value < value) {
      top = {
        key,
        value
      };
    }
    if (bottom.value > value) {
      bottom = {
        key,
        value
      };
    }
  });

  for (let key in dict) {
    keysSum += parseFloat(key);
    dividend += parseFloat(key) * dict[key];
    divider += dict[key];
  }

  return {
    title: title,
    count: floatArray.length,
    average: Math.round(keysSum / keys.length),
    weighted: divider ? Math.round(dividend / divider) : 'N/A',
    min: min,
    max: max,
    variety: keys.length,
    dict: dict,
    top: top,
    bottom: bottom
  };
}

function statStringArray(stringArray, title) {
  let dict = {};
  stringArray
    .sort()
    .forEach(function (value) {
      if (dict.hasOwnProperty(value)) {
        dict[value]++;
      } else {
        dict[value] = 1;
      }
    });
  let keys = Object.keys(dict);
  let bottom = {
    key: keys[0],
    value: dict[keys[0]]
  };
  let top = {
    key: keys[0],
    value: dict[keys[0]]
  };
  keys.forEach(function (key) {
    let value = dict[key];
    if (top.value < value) {
      top = {
        key,
        value
      };
    }
    if (bottom.value > value) {
      bottom = {
        key,
        value
      };
    }
  });

  return {
    title: title,
    count: stringArray.length,
    variety: Object.keys(dict).length,
    dict: dict,
    top: top,
    bottom: bottom,
  };
}

module.exports = function (folders, callback) {
  let movieCount = 0;
  let years = [];
  let sizes = [];
  let durations = [];
  let fpss = [];
  let imdbRatings = [];
  let metascores = [];
  /* string */
  let resolutions = [];
  let genres = [];
  let exts = [];
  let subs = [];

  folders.forEach(function (folder) {
    folder.videos.forEach(function (movie) {
      exts.push(movie.ext);
      sizes.push(movie.size);
      durations.push(movie.duration);
      fpss.push(movie.fps);
      resolutions.push(`${movie.width}x${movie.height}`);
      movieCount++;
      movie.metascore && metascores.push(movie.metascore);
      movie.subs && subs.push(movie.subs);
      movie.year && years.push(movie.year);
      movie.imdbRating && imdbRatings.push(movie.imdbRating);
      movie.genre && (genres = genres.concat(movie.genre.split(', ')));
    });
  });

  dbSave('stats', {
    folderCount: folders.length,
    movieCount: movieCount,
    numericStats: [
      statFloatArray(years, 'Release years'),
      statFloatArray(sizes, 'File sizes (MB)'),
      statFloatArray(durations, 'Durations (minutes)'),
      statFloatArray(fpss, 'Frames per second'),
      statFloatArray(imdbRatings, 'IMDB ratings'),
      statFloatArray(metascores, 'Metascores')
    ],
    stringStats: [
      statStringArray(resolutions, 'Resolutions'),
      statStringArray(genres, 'Genres'),
      statStringArray(exts, 'Extensions'),
      statStringArray(subs, 'Subtitles'),
    ]
  });

  callback(null, folders);
};
