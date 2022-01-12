import "./App.css";
import React, { Component } from "react/cjs/react.production.min";
import { CardList } from "./components/card-list/card-list.component";
//class component method
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
      .then(users => this.setState({monsters: users}))
    );
  }

  render() {
    return (
      <div className="App">
        <CardList name='Harsha'><h1>Harsha</h1></CardList>
        {this.state.monsters.map((monsters) => (
          <h1 key={monsters.id}>{monsters.name}</h1>
        ))}
      </div>
    );
  }
}
// Hook fucntions
// function App() {
//   return (

//   );
// }

export default App;
