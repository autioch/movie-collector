/* global document */
import VirtualList from '../virtualList/index';

export default VirtualList.extend({
  initialize() {
    VirtualList.prototype.initialize.apply(this, arguments);
    this._expandedHeight = 0;
    this._lastEndIndex = 0;
    this.listenTo(this.collection, 'change:isExpanded', this.updateItems);
  },
  updateScroller() {
    let height = this.collection.length * this.itemHeight + this._expandedHeight;
    this.$('.virtual-list__scroller').css('height', height);
  },
  updateItems() {
    const startIndex = Math.floor(this.el.scrollTop / this.itemHeight); //this is invalid, but will work for now
    const endIndex = this.showItems(startIndex);
    // this.hideItems(startIndex, endIndex);
    this.updateScroller();
    this.removeItemsDebounced();
  },
  // hideItems(startIndex, endIndex) {
  // const indexes = this.getHiddenIndexes(startIndex, count);
  //   for (let i = indexes[0]; i <= indexes[1]; i++) {
  //     const view = this._dict[i];
  //     if (view) {
  //       view.__virtualListHidden = true;
  //     }
  //   }
  //   this._lastStartIndex = startIndex;
  // },
  showItems(startIndex) {
    let currentTop = startIndex * this.itemHeight; //this is invalid, but will work for now
    let currentIndex = startIndex;
    const maxTop = this.$el.height() + currentTop;
    this._expandedHeight = 0;
    while (currentTop < maxTop) {
      const view = this.getView(currentIndex);
      view.$el.css({
        position: 'absolute',
        top: currentTop
      });
      this.el.appendChild(view.el);
      if (view.model.get('isExpanded')) {
        /* clientRect is pricey, only use it for special cases. Let's try with offsetHeight  */
        // this._expandedHeight = view.el.getBoundingClientRect().height;
        this._expandedHeight = view.el.offsetHeight;
        currentTop += this._expandedHeight;
      } else {
        currentTop += this.itemHeight;
      }
      currentIndex++;
    }
    return currentIndex;
  }
});
