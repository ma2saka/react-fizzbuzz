import React from 'react'

export default class Play extends React.Component {

  state = { count: 1, fizz: false, buzz: false, tick: 10 }
  loop = () => {
    const tick = this.state.tick - 1
    if (tick < 0) {
      const count = this.state.count
      if (count % 3 === 0) {
        if (!this.state.fizz) {
          return this.end(`miss fizz, ${count} is multiples of 3`)
        }
      } else {
        if (this.state.fizz) {
          return this.end(`bad fizz, ${count} is not multiples of 3`)
        }
      }

      if (count % 5 === 0) {
        if (!this.state.buzz) {
          return this.end(`miss buzz, ${count} multiples of 5`)
        }
      } else {
        if (this.state.buzz) {
          return this.end(`bad buzz, ${count} is not multiples of 5`)
        }
      }

      this.setState({ count: this.state.count + 1, fizz: false, buzz: false, tick: 10 })
    } else {
      this.setState({ tick: tick })
    }

    setTimeout(this.loop, this.props.interval / 10)
  }

  end(message) {
    clearInterval(this.interval)
    this.props.onEnd({ score: this.state.count - 1, message })
  }

  keydown = (e) => {
    if (e.keyCode == 27) {
      this.end("cancel");
      return;
    }

    const o = {}
    if (e.key === 'f') {
      o.fizz = true
    }
    if (e.key === 'b') {
      o.buzz = true;
    }
    this.setState(o)
  }


  componentDidMount() {
    document.body.addEventListener("keydown", this.keydown)
    setTimeout(this.loop, this.props.interval / 10)
  }

  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.keydown)
  }

  render() {
    const style = { fontSize: (300 + (10 - this.state.tick) * 5) + '%' }
    return <>
      <p><span style={style}>{this.state.count}</span></p>
      <div>
        {this.state.fizz && <span>Fizz</span>}
        {this.state.buzz && <span>Buzz</span>}
      </div>
    </>
  }
}