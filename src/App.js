import logo from "./logo.svg";
import "./App.css";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello this is Harsha!</p>
          <button>
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
