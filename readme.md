# Movie-collector
Nodejs application for collecting information about videos.

 _**Note: this is my first real application for node (5 in particular).**_
1. Searches given directory for videos.
2. Uses ffmpeg to extract video details, like resolution, audio and video streams.
3. Accesses Open Media Database for video description, like rating, category.
4. Calculates stats for found videos.
5. Generates simple html output for stats and video list.

## Requirments
1. This application was developed on Windows, with Node 5. I can not guarantee that it will work anywhere else. Feel free to pull request :)
2. Depends on installing ffmpeg for probing found videos.
3. Requires internet access to query OMDB.

## Installation
1. Download package
2. Run `npm install` to install node dependecies.
3. Download `ffmpeg` and extract zip contents to ffmpeg folder.

## Configuration
1. Set configuration details in `config.json`.

## Expected folder structure

```
rootPath
    folder
        file
        file
    folder
        file
```

## Development
This application is build for my private requirments. I will modify to suit my needs. If You have any ideas or suggestions, feel free to pull request :)
