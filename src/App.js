import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react/cjs/react.production.min";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankenstine",
          id: "m1",
        },
        {
          name: "Dracula",
          id: "m2",
        },
        {
          name: "Zombie",
          id: "m3",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monsters) => (
          <h1 key={monsters.id}>{monsters.name}</h1>
        ))}
      </div>
    );
  }
}
// function App() {
//   return (

//   );
// }

export default App;
