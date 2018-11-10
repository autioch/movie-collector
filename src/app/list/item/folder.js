import React from 'react';
import { join } from 'path';

export default ({ item }) => (
  <div className="folder">
    { join(item.folderPath, item.itemName) }
  </div>
);
