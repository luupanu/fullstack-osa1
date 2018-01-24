import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({hyva, neutraali, huono, ka, pos}) => (
  <div>
    <table>
      <tbody>
        <Statistic
          text='hyvä'
          value={hyva}
        />
        <Statistic
          text='neutraali'
          value={neutraali}
        />
        <Statistic
          text='huono'
          value={huono}
        />
        <Statistic
          text='keskiarvo'
          value={ka}
        />
        <Statistic
          text='positiivisia'
          value={pos}
        />
      </tbody>
    </table>
  </div>
)

class Unicafe extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  calcAvg = () => ((this.state.hyva - this.state.huono) /
    (this.state.hyva + this.state.neutraali + this.state.huono)).toFixed(2)

  calcPos = () => (this.state.hyva /
    (this.state.hyva + this.state.neutraali + this.state.huono) * 100).toFixed(2) + ' %'

  incrementByOne = (key) => () => this.setState({[key]: this.state[key] + 1})

  statistics() {
    if ((this.state.hyva + this.state.neutraali + this.state.huono) > 0) {
      return <Statistics
        hyva={this.state.hyva}
        neutraali={this.state.neutraali}
        huono={this.state.huono}
        ka={this.calcAvg()}
        pos={this.calcPos()}
      />
    }
    return <p>ei yhtään palautetta annettu </p> 
  }

  render() {
    return(
      <div>
        <h1>anna palautetta</h1>
        <Button
          handleClick={this.incrementByOne('hyva')}
          text='hyvä'
        />
        <Button
          handleClick={this.incrementByOne('neutraali')}
          text='neutraali'
        />
        <Button
          handleClick={this.incrementByOne('huono')}
          text='huono'
        />
        <h1>statistiikka</h1>
        {this.statistics()}
      </div>
    )
  }
}

ReactDOM.render(<Unicafe/>, document.getElementById('root'))