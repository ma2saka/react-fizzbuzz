import React from 'react'
import { GoMarkGithub } from "react-icons/go";

const levels = [
  { label: 'EASY', interval: 1000 },
  { label: 'HARD', interval: 700 },
  { label: 'VERY HARD', interval: 500 },
  { label: 'HELL', interval: 300 }
]
export default class Title extends React.Component {
  render() {
    const result = this.props.result;
    return (<div style={{ padding: "10px", textAlign: "center" }}>
      <header style={{ fontSize: "2em" }}>
        <a href="https://github.com/ma2saka/react-fizzbuzz"><GoMarkGithub /></a>
      </header>
      <hr />
      {result &&
        <p>previous score:{result.score} ({result.message})</p>
      }
      <h1>React FizzBuzz</h1>
      <p>Use "f" and "b" key.</p>
      <ul style={{ padding: "0", margin: "0" }}>
        {levels.map(c => (
          <li key={c.label} style={{ listStyleType: "none" }}>
            <button onClick={() => this.props.onStart({ interval: c.interval })} style={{ margin: "5px", width: "35vw", height: "8vh" }}>
              {c.label}
            </button>
          </li>
        )
        )}
      </ul>
    </div>)
  }
}
