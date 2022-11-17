// import { Component } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filtered = monsters.filter((m) => {
      return m.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(filtered);
  }, [monsters, searchField, setFilteredMonsters]);
 
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="title">Monsters</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField }
//     })
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filtered = monsters.filter((m) => {
//               return m.name.toLocaleLowerCase().includes(searchField);
//             });
//     return (
//       <div className="App">
//         <h1 className="title">Monsters</h1>
//         <SearchBox onChangeHandler = {onSearchChange} placeholder= "search monster" className="search-box" />
//         <CardList monsters = {filtered} />
//       </div>
//     );
//   }
// }
