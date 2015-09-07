import React from 'react'
import ClickerCounterActions from '../../../actions/ClickerCounterActions.js';
import ClickBonus from '../../bonuses/ClickBonus/ClickBonus.js';
import TickBonus from '../../bonuses/TickBonuses/TickBonus.js';

export default class ShopBlock extends React.Component {

  constructor() {
    super();
  }

  handleClick = (count, typeBonus) => {
    ClickerCounterActions.buyCount(count, typeBonus);
  };

  render() {

    return (
      <div className="shop">
        <ul className="list-group">
          <TickBonus onClick={this.handleClick} />
          <ClickBonus onClick={this.handleClick} />
        </ul>
      </div>
    )

  }
}