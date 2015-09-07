import React from 'react'

export default class TickBonus extends React.Component {
  constructor() {
    super();
  }

  handleClick = (count, typeBonus, e) => {
    e.preventDefault();
    this.props.onClick(count, typeBonus);
  };

  render() {

    return (
        <li className="shop__tick list-group-item">
          <span className="badge">цена 25</span>
          <a href="#" onClick={this.handleClick.bind(this, 20, 'tickBonus')} className="shop__link">Фабрику кликов!</a>
        </li>
    )

  }
}