import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { ADD_COUNTER_CLICK, BUY_COUNTER_CLICK } from '../constants/ClickerCounterConstants.js';

export default {

  addCount(count = 1) {
    AppDispatcher.dispatch({
      type: ADD_COUNTER_CLICK,
      count: count
    });
  },

  buyCount(count, typeBonus) {

    AppDispatcher.dispatch({
      type: BUY_COUNTER_CLICK,
      bayCount: count,
      typeBonus: typeBonus
    });
  }


}