import "./App.css";
import React, { Component } from "react/cjs/react.production.min";
import { CardList } from "./components/card-list/card-list.component";
//class component method
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  render() {
    return (
      <div className="App">
        <input type = 'search' placeholder="search monsters" onChange={e => console.log(e.target)}/>
        <CardList monsters={this.state.monsters}></CardList>
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
