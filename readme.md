# Movie collector
Nodejs application for collecting information about video files.

## Requirements
1. Build on Windows, Node 7. I can not guarantee that it will work anywhere else.
2. Depends on installing ffmpeg for probing found videos.
3. Requires internet access to query OMDB.

## Installation
1. Download `ffmpeg` and extract zip contents to ffmpeg folder.
2. Run `npm install`.

## Configuration
For list of available options and descriptions, see `app/config/default.js`.

Params can be passed as inline arguments, with format:
```
node app --input=./inputData/data.json --omdb --stat --check
```

Also, configuration file is accepted, that is regular js file:
```
node app --config=./config.js
```
