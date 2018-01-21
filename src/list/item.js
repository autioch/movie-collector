import React from 'react';

export default ({ video }) => (
  <tr className="video">
    <td className="folder">{video.file.folder}</td>
    <td className="title">{video.title}</td>
    <td className="extension">{video.file.ext}</td>
    <td className="size">{ `${Math.floor(video.file.size / 1024)}kb`}</td>
    <td className="created">{video.file.created.substr(0, 10)}</td>
  </tr>
);
