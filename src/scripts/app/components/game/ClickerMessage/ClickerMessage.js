import React from 'react'
import ClickerCounterActions from '../../../actions/ClickerCounterActions.js';

export default class ClickerMessage extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { countClick } = this.props;
    return (
      <div className="alert alert-success" role="alert">
        <strong>Браво!</strong> Уже больше {countClick}!
      </div>
    )

  }
}