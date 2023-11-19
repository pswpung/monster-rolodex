// // ---------- Class Components Method ----------
// import { Component } from 'react';
// import CardList from "./components/card-list/card-list.component";
// import SearchBox from './components/search-box/search-box.component';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then((users) => this.setState(
//       () => {return {monsters: users}},
//       // () => console.log(this.state)
//     ))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState({searchField: searchField})
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='monster-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

// ---------- Functional Components Method ----------
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log("render")
  const [ searchField, setSearchField ] = useState('')
  const [ monsters, setMonsters] = useState([])
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((users) => {setMonsters(users)})
  }, [])
  
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monster-search-box'
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
