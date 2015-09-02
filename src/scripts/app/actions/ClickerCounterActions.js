import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { INC_COUNTER_CLICK, PAY_COUNTER_CLICK } from '../constants/ClickerCounterConstants.js';

export default {

  incCount() {
    AppDispatcher.dispatch({
      type: INC_COUNTER_CLICK
    });
  },

  payCount(count) {
    AppDispatcher.dispatch({
      type: PAY_COUNTER_CLICK,
      payCount: count
    });
  }

}