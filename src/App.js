import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  constructor() {
    super();

    this.state = {
      String: "Hello, this is Harsha!",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.String}</p>
          <button onClick={() => this.setState({ string: "Hello World!" })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}
// function App() {
//   return (

//   );
// }

export default App;
