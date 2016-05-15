# Movie collector
Nodejs application for collecting information about video files.

## Available steps
Steps can be disabled if they were run before. See more in configuration.
1. `parseDir` searches given directory for video (and subtitles) related files.
2. `parseVideo` transforms collected files into video data.
3. `ffProbe` uses ffmpeg to scan video files for extra data. This step requires ffmpeg installed.
4. `queryOmdb` queries openIMDB server for extra data. This step requires internet connection.
5. `viewList` outputs html page listing all videos.
6. `stat` calculates base statistics from collected data.
7. `viewStat` outputs html page displaing stats collected with `stat`.

## Requirments
1. Build on Windows, Node 6. I can't guarantee that it will work anywhere else.
2. Depends on installing ffmpeg for probing found videos.
3. Requires internet access to query OMDB.

## Installation
1. Download `ffmpeg` and extract zip contents to ffmpeg folder.

## Configuration
Configuration is stored in `config.js`.

### rootPath
Path to be parsed in `parseDir`.

### formats
File extensions to be used during `parseVideo` step.

### paths
`ffProbe` requires ffmpeg to be installed. By default, it expects it to be located in
folder `ffmpeg` next to `app` folder. If it's changed, adjust the paths.

### steps
List of steps to run.

#### Disabling steps
All steps write their results to the cache folder. Any step can be disabled if it was at least once run.
If the step was run, its cache will be used by other steps.

## webApp
After parsing video folder, it is possible to build simple web app that will allow to view the collected data.
1. `cache/stat.json` and `cache/queryOmdb.json` must be copied into `webApp/build` folder.
2. Run `npm run webApp` to build the data. Optionally `npm run webApp:watch`, `npm run webApp:production`.
