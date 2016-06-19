import VirtualList from 'components/virtualList';
import FolderView from './folderView';
import './index.scss';

export default VirtualList.extend({
  className: 'virtual-list list',
  itemHeight: 30,
  itemView: FolderView
});
