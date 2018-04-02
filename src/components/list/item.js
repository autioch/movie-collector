import React from 'react';

export default ({ video, setTitleSuggestion, setYearSuggestion }) => {
  const { file, suggestion } = video;

  return (
    <div className="video">
      <div className="video__details">
        <div className="folder">{file.folder}</div>
        <div className="year">{video.year}</div>
        <div className="title">{video.title}</div>
        <div className="extension">{file.ext}</div>
        <div className="size">{ `${Math.floor(file.size / 1024)}kb`}</div>
        <div className="created">{file.created.substr(0, 10)}</div>
      </div>
      <div className="video__details">
        <div className="folder" />
        <input
          className={`year ${suggestion.titleIsDifferent ? 'is-different' : ''}`}
          onChange={(ev) => setYearSuggestion({
            id: video.id,
            year: ev.target.value
          })}
          value={suggestion.year}
        />
        <input
          className={`title ${suggestion.titleIsDifferent ? 'is-different' : ''}`}
          onChange={(ev) => setTitleSuggestion({
            id: video.id,
            title: ev.target.value
          })}
          value={suggestion.title}
        />
      </div>
    </div>
  );
};
