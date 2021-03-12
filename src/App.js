import './App.css';
import React, { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-field/search-box';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: [],
      search_field :""
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({search_field: e.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({pokemon: users}));
  }

  render() {
    const { pokemon, search_field } = this.state;
    const filtered_pokemon = pokemon.filter(pokemon => 
      pokemon.name.toLowerCase().includes(search_field.toLowerCase())
    )
    return (
      <div className="App">
        <SearchBox placeholder='pokemon name' handleChange={this.handleChange}/>
        <CardList pokemon={filtered_pokemon}>
        </CardList>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
