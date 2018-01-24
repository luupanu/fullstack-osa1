import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({text, votes}) => (
  <div>
    <p>{text}</p>
    <p>has {votes} votes</p>
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: new Array(anecdotes.length).fill(0)
    }
  }

  addVote = (selected) => () => {
    const array = this.state.votes.slice(0) // duplicate array
    array[selected] += 1
    this.setState({votes: array})
  }

  chooseRandomAnecdote = () => () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    while (random === this.state.selected) {  // re-roll if we got the same anecdote
      random = Math.floor(Math.random() * anecdotes.length)
    }
    this.setState({selected: random})
  }

  // returns the position of the anecdote with most votes in this.state.votes
  mostVotes = () => this.state.votes.reduce((iMax, x, i, array) => x > array[iMax] ? i : iMax, 0)

  render() {
    return(
      <div>
        <Anecdote
          text={this.props.anecdotes[this.state.selected]}
          votes={this.state.votes[this.state.selected]}
        />
        <Button handleClick={this.addVote(this.state.selected)} text="vote"/>
        <Button handleClick={this.chooseRandomAnecdote()} text="next anecdote"/>
        <h1>Anecdote with most votes</h1>
        <Anecdote
          text={this.props.anecdotes[this.mostVotes()]}
          votes={this.state.votes[this.mostVotes()]}
        />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))