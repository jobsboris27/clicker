import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { INC_COUNTER_CLICK, PAY_COUNTER_CLICK } from '../constants/ClickerCounterConstants.js';
const CHANGE_EVENT = 'CHANGE_EVENT';

let _count = 0;

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
}

let store = new ClickerCounterStore();

AppDispatcher.register(payload => {

  switch (payload.type) {

    case INC_COUNTER_CLICK:
      _count++;
      store.emitChange();
      break;
    case PAY_COUNTER_CLICK:
      console.log(payload.payCount);
      _count = _count - payload.payCount;
      store.emitChange();
      break;
  }

});

export default store;