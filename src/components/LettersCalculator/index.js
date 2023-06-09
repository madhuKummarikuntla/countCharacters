// Write your code here.
import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {count: 0}

  onChangeLetterCount = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-con">
        <div className="sub-con">
          <h1 className="head">Calculate the Letters you enter</h1>
          <div className="input-con">
            <label htmlFor="labelEl" className="label">
              Enter the phrase
            </label>
            <input
              type="text"
              className="text"
              id="labelEl"
              placeholder="Enter the phrase"
              onChange={this.onChangeLetterCount}
            />
          </div>
          <div className="count-phrase">
            <p className="count-letters">No.of letters: {count}</p>
          </div>
        </div>
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}
export default LetterCalculator
