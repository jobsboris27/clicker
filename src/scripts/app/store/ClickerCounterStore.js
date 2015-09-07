import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { ADD_COUNTER_CLICK, BUY_COUNTER_CLICK } from '../constants/ClickerCounterConstants.js';
const CHANGE_EVENT = 'CHANGE_EVENT';

let _count = 0;
let _tickBonuses = undefined;
let _clickBonuses = undefined;

class ClickerCounterStore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getCount() {
    return _count;
  }

  getTickBonuses() {
    return _tickBonuses;
  }

  getClickBonuses() {
    return _clickBonuses;
  }

}

let store = new ClickerCounterStore();

AppDispatcher.register(payload => {

  switch (payload.type) {

    case ADD_COUNTER_CLICK:
      _count = _count + payload.count;
      store.emitChange();
      break;

    case BUY_COUNTER_CLICK:
      _count = (_count - payload.bayCount) < 0 ? _count : _count - payload.bayCount;
      store.emitChange();
      break;
  }

});

export default store;