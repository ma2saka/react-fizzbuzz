import React from 'react'
import Play from './play'
import Title from './title'

const DEFAULT_INTERVAL = 1000

export default class Game extends React.Component {
  state = {
    mode: "title"
  }

  play = () => this.setState({ mode: "play" })

  end = (result) => this.setState({ mode: "title", previousResult: result })

  render = () => (
    <div>
      {this.state.mode == 'play' && <Play interval={DEFAULT_INTERVAL} onEnd={this.end} />}
      {this.state.mode == 'title' &&
        <Title result={this.state.previousResult} onStart={this.play} />
      }
    </div>
  )
}
