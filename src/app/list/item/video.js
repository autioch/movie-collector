import React from 'react';

export default ({ item }) => {
  const { file } = item;

  return (
    <div className="video" >
      <div className="video__details">
        <div className="year">{file.year}</div>
        <div className="title">{file.title}</div>
        <div className="extension">{file.ext}</div>
        <div className="size">{ `${Math.floor(file.size / 1024)}kb`}</div>
        <div className="created">{file.created.substr(0, 10)}</div>
      </div>
    </div>
  );
};
