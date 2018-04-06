import electron from 'electron';

const { dialog } = electron.remote;

export default function choosePath(state, id, store) {
  dialog.showOpenDialog({
    properties: ['openDirectory']
  }, (directories = []) => {
    if (directories.length) {
      store.setSettingValue({
        id,
        value: directories[0]
      });
    }
  });
}
