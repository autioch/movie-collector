import electron from 'electron';

const { dialog } = electron.remote;

export default function choosePath({ store }) {
  dialog.showOpenDialog({
    properties: ['openDirectory']
  }, (directories = []) => {
    if (directories.length) {
      store.setPath(directories[0]);
    }
  });
}
