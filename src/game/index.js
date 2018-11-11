import React from 'react'
import Play from './play'
import Title from './title'

const DEFAULT_INTERVAL = 1000

export default class Game extends React.Component {
  state = {
    mode: "title",
    options: { interval: DEFAULT_INTERVAL }
  }

  play = (options) => this.setState({ mode: "play", options })

  end = (result) => this.setState({ mode: "title", previousResult: result })

  render = () => (
    <div>
      {this.state.mode == 'play' && <Play options={this.state.options} onEnd={this.end} />}
      {this.state.mode == 'title' &&
        <Title options={this.state.options} result={this.state.previousResult} onStart={this.play} />
      }
    </div>
  )
}
