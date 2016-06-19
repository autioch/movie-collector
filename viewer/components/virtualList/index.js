/* global document */
import Backbone from 'backbone';
import debounce from 'lodash.debounce';
import './index.scss';

function getHiddenIndexes(startIndex, previousStartIndex, count) {
  if (startIndex < previousStartIndex) {
    return [startIndex + count, previousStartIndex + count];
  }
  return [previousStartIndex, startIndex];
}

export default Backbone.View.extend({
  itemHeight: 30,
  itemView: null,
  className: 'virtual-list',
  events: {
    scroll: 'updateItems'
  },
  initialize() {
    this._lastIndex = 0;
    this._dict = {};
    this.removeItemsDebounced = debounce(this.removeItems, 300);
  },
  render() {
    this.$el.html(this.getScroller());
    this.updateItems();
  },
  getScroller() {
    const scrollerElement = document.createElement('div');
    scrollerElement.className = 'virtual-list__scroller';
    scrollerElement.style.height = this.collection.length * this.itemHeight + 'px';
    return scrollerElement;
  },
  updateScroller() {
    this.$('.virtual-list__scroller').css('height', this.collection.length * this.itemHeight);
  },
  /* @TODO Not very efficient, needs some cleanup. */
  updateItemHeight(newItemHeight) {
    this.itemHeight = newItemHeight;
    this.updateScroller();
    const dict = this._dict;
    for (let key in dict) {
      if (dict[key]) {
        dict[key].__virtualListHidden = true;
      }
    }
    this.updateItems();
    this.removeItems();
  },
  updateItems() {
    const startIndex = Math.max(0, Math.floor(this.el.scrollTop / this.itemHeight) - 3);
    const count = Math.floor(this.$el.height() / this.itemHeight) + 6;
    const endIndex = Math.min(this.collection.length, startIndex + count);
    this.hideItems(startIndex, count);
    this.showItems(startIndex, endIndex);
    this.removeItemsDebounced();
  },
  hideItems(startIndex, count) {
    const indexes = getHiddenIndexes(startIndex, this._lastIndex, count);
    for (let i = indexes[0]; i <= indexes[1]; i++) {
      const view = this._dict[i];
      if (view) {
        view.__virtualListHidden = true;
      }
    }
    this._lastIndex = startIndex;
  },
  getView(index) {
    const cachedView = this._dict[index];
    if (cachedView) {
      cachedView.__virtualListHidden = false;
      return cachedView;
    }
    return this.getNewView(index);
  },
  getNewView(index) {
    const view = new this.itemView({
      model: this.collection.models[index]
    });
    this._dict[index] = view;
    view.render();
    return view;
  },
  showItems(startIndex, endIndex) {
    const elements = [];
    for (let i = startIndex; i < endIndex; i++) {
      const view = this.getView(i);
      view.$el.css({
        position: 'absolute',
        top: i * this.itemHeight
      });
      elements.push(view.el);
    }
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < elements.length; i++) {
      fragment.appendChild(elements[i]);
    }
    this.el.appendChild(fragment);
  },
  removeItems() {
    const dict = this._dict;
    for (let key in dict) {
      if (dict[key] && dict[key].__virtualListHidden) {
        dict[key].remove();
        dict[key] = null;
      }
    }
  }
});
