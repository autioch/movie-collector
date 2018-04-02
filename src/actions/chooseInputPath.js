import electron from 'electron';

const { dialog } = electron.remote;

export default function chooseInputPath(state, param, store) {
  dialog.showOpenDialog({
    properties: ['openDirectory']
  }, (directories = []) => {
    if (directories.length) {
      store.setInputPath(directories[0]);
    }
  });
}
