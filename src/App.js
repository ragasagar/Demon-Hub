import React, { Component } from 'react';
import './App.css';
import { SearchBox } from './component/search-box/search-box.component';
import { CardList } from './component/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      demons: [],
      searchText: ""
    }
  }

  componentDidMount() {
    this.getDemons().then(users => this.setState({
      demons: users
    }));
  }

  getDemons() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
  }

  handleClick = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }


  render() {
    const { demons, searchText } = this.state;
    const searchDemons = demons.filter(demon => demon.name.toLowerCase().includes(searchText.toLowerCase()));
    return (
      <div className="App">
        <h1>DEMONS HUB</h1>
        <SearchBox
          placeholder="Search Demons"
          handleChange={this.handleClick}
        />
        <CardList demons={searchDemons} />
      </div>
    );
  }
}

export default App;
