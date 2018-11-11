import { basename, extname } from 'path';

const YEAR_OFFSET = 7;

const NAME_REGEX = /^\[(\d\d\d\d)\] .+$/i;

export default function getFilenameData(itemName) {
  let year;
  let nameOffset = 0;
  const extension = extname(itemName);
  const fileName = basename(itemName, extension);

  if (NAME_REGEX.test(fileName)) {
    year = parseInt(fileName.substr(1), 10);
    nameOffset = YEAR_OFFSET;
  }

  return {
    ext: extension.substr(1), // remove dot
    fileName,
    title: fileName.substr(nameOffset),
    year
  };
}
