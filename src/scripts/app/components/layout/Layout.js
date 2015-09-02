import React from 'react'
import ClickerCounterStore from '../../store/ClickerCounterStore.js';
import ClickerButton from '../game/ClickerButton/ClickerButton.js';
import ClickerCounter from '../game/ClickerCounter/ClickerCounter.js';
import ClickerShopDoubleClick from '../game/shop/ClickerShopDoubleClick/ClickerShopDoubleClick.js';
import ClickerMessage from '../game/ClickerMessage/ClickerMessage.js';

const FIRST_STEP = 10;
const SECOND_STEP = 20;
const THIRD_STEP = 50;

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      countClick: 0
    }
  }

  componentWillMount() {
    ClickerCounterStore.addChangeListener(
      this.onCountChange
    );
  }

  componentWillUnmount() {
    ClickerCounterStore.removeChangeListener(
      this.onCountChange
    );
  }

  render = () => {
    let { countClick } = this.state;

    let message = countClick > FIRST_STEP && countClick < SECOND_STEP ?  <ClickerMessage countClick={FIRST_STEP}/> : undefined;
    let shopDoubleClick = countClick > SECOND_STEP  ? <ClickerShopDoubleClick/> : undefined;

    return (
      <div className="wrapper">
        <div className="container grid">
          <div className="grid__item">
            <ClickerButton/>
          </div>

          <div className="grid__item">
            {shopDoubleClick}
          </div>

          <div className="grid__item">
            <ClickerCounter/>
          </div>
          <div className="grid__item">
            {message}
          </div>

        </div>

      </div>
      )
  };

  onCountChange = () => {
    this.setState({
      countClick: ClickerCounterStore.getCount()
    })
  }
}