import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/searchBox/searchBox.component";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    //  this.handlerChange=this.handlerChange.bind(this);
  }

  // life cycle methods

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handlerChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const MonsterName = monsters.filter((mons) =>
      mons.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>MONSTER ROLADEX</h1>
        <SearchBox place="search monster" change={this.handlerChange} />
        <CardList mon={MonsterName} />
        {/* <SearchBox place='man'change={e=>this.setState({searchField:e.target.value})} /> */}
      </div>
    );
  }
}

export default App;
