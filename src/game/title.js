import React from 'react'

export default class Title extends React.Component {
  render() {
    const result = this.props.result;
    return (<div style={{ padding: "10px", textAlign: "center" }}>
      <p>previous score: {result ? (<>{result.score} ({result.message})</>) : "-"}</p>
      <h1>React FizzBuzz</h1>
      <p>Use "f" and "b" key.</p>
      <ul style={{ padding: "0", margin: "0" }}>
        <li style={{ margin: "5px", listStyleType: "none" }}>
          <button onClick={() => this.props.onStart({ interval: 1000 })} style={{ width: "35vw", height: "8vh" }}>
            EASY
          </button>
        </li>
        <li style={{ margin: "5px", listStyleType: "none" }}>
          <button onClick={() => this.props.onStart({ interval: 700 })} style={{ width: "35vw", height: "8vh" }}>
            HARD
          </button>
        </li>
        <li style={{ margin: "5px", listStyleType: "none" }}>
          <button onClick={() => this.props.onStart({ interval: 500 })} style={{ width: "35vw", height: "8vh" }}>
            HELL
          </button>
        </li>
      </ul>
    </div>)
  }
}
