import React from 'react'


export default class ClickBonus extends React.Component {
  constructor() {
    super();
  }

  handleClick = (count, typeBonus, e) => {
    e.preventDefault();
    this.props.onClick(count, typeBonus);
  };

  render() {

    return (
        <li className="shop__click list-group-item">
          <span className="badge">цена 15</span>
          <a href="#" onClick={this.handleClick.bind(this, 15, 'clickBonus')}  className="shop__link">Плюс два клика</a>
        </li>
    )

  }
}