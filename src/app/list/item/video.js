import React from 'react';

const noop = () => console.log('noop');

export default ({ item, setTitleSuggestion = noop, setYearSuggestion = noop, settingValues }) => {
  const { file, suggestion } = item;

  return (
    <div className="video" >
      <div className="video__details">
        <div className="year">{file.year}</div>
        <div className="title">{file.title}</div>
        <div className="extension">{file.ext}</div>
        <div className="size">{ `${Math.floor(file.size / 1024)}kb`}</div>
        <div className="created">{file.created.substr(0, 10)}</div>
      </div>
      <div className="video__details">
        <div className={`year ${suggestion.titleIsDifferent ? 'is-different' : ''}`}>{suggestion.year}</div>
        <div className={`title ${suggestion.titleIsDifferent ? 'is-different' : ''}`}>{suggestion.title}</div>
        {/* <input
          className={`year ${suggestion.titleIsDifferent ? 'is-different' : ''}`}
          onChange={(ev) => setYearSuggestion({
            id: item.id,
            year: ev.target.value
          })}
          value={suggestion.year}
        />
        <input
          className={`title ${suggestion.titleIsDifferent ? 'is-different' : ''}`}
          onChange={(ev) => setTitleSuggestion({
            id: item.id,
            title: ev.target.value
          })}
          value={suggestion.title}
        /> */}
      </div>
    </div>
  );
};
