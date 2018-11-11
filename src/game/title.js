import React from 'react'

export default class Title extends React.Component {
  startButtonRef = React.createRef()

  componentDidMount() {
    setTimeout(() => {
      this.startButtonRef.current.focus();
    }, 10);
  }

  render() {
    const result = this.props.result;
    return (<>
      <p>previous score: {result ? (<>{result.score} ({result.message})</>) : "-"}</p>
      <h1>Awesome FizzBuzz</h1>
      <p>Use "f" and "b" key.</p>
      <button ref={this.startButtonRef} onClick={this.props.onStart}>
        START
      </button>
    </>)
  }
}
