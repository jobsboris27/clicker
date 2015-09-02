import React from 'react'
import ClickerCounterActions from '../../../../actions/ClickerCounterActions.js';

export default class ClickerShop extends React.Component {
  constructor() {
    super();
  }
  handleClick = (e) => {
    e.preventDefault();
    ClickerCounterActions.payCount(20);
  };
  render() {

    return (
      <div className="shop">
        <ul className="list-group">
          <li className="list-group-item">
             <span className="badge">20</span>
            <a href="#" onClick={this.handleClick} className="shop__link">Купить двойной клик!</a>
            цена
          </li>
        </ul>
      </div>
    )

  }
}