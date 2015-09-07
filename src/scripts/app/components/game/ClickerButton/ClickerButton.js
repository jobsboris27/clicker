import React from 'react'
import ClickerCounterActions from '../../../actions/ClickerCounterActions.js';

export default class ClickerButton extends React.Component {
  constructor() {
    super();
  }
  handleClick = (e) => {
    e.preventDefault();
    ClickerCounterActions.addCount();
  };
  render() {

    return (
      <a href='#' onClick={this.handleClick}className="clicker__button">Кликай!</a>
    )

  }
}