import React from 'react'
import ClickerCounterStore from '../../store/ClickerCounterStore.js';
import ClickerButton from '../game/ClickerButton/ClickerButton.js';
import ClickerCounter from '../game/ClickerCounter/ClickerCounter.js';
import ShopBlock from '../game/shop/ShopBlock.js';
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
    let message = undefined;


    return (
      <div className="wrapper">
        <div className="container grid">
          <div className="grid__item">
            <ClickerButton/>
          </div>

          <div className="grid__item">
            <ShopBlock />
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