import React from 'react'
import ClickerCounterStore from '../../../store/ClickerCounterStore.js';

export default class ClickerCounter extends React.Component {

  constructor() {
    super();

    this.state = {
      countClick: 0
    }

  };

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

  render = () =>{
    let { countClick } = this.state;

    return (
      <span className="clicker__counter">Количество: {+countClick}</span>
    )
  };

  onCountChange = () => {
    this.setState({
      countClick: ClickerCounterStore.getCount()
    })
  }

}