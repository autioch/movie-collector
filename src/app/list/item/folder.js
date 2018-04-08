import React from 'react';
import { join } from 'path';

const noop = () => console.log('noop');

export default ({ item, setTitleSuggestion = noop, setYearSuggestion = noop, settingValues }) => {
  const { suggestion } = item;

  return (
    <div className="video" >
      <div className="video__details">
        <div className="folder">
          { settingValues.showFullFolderPaths ? join(item.folderPath, item.itemName) : item.itemName }
        </div>
      </div>
      {/* <div className="video__details">
        <div className="folder" />
        <input
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
        />
      </div> */}
    </div>
  );
};
