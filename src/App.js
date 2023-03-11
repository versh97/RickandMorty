
import Cards from './components/Cards/Cards'
import SearchBar from './components/SearchBar/SearchBar'
import style from "./App.module.css";
import Nav from './components/Nav/Nav';
import {useState} from 'react'


function App () {
  const [characters, setCharacters] = useState([]);

   const onSearch = (character) =>  {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

   const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
   }

  return (
    <div className='App' style={{ padding: '25px', backgroundImage: 'url("https://wallpapersmug.com/download/1600x900/b6da7f/minimal-art-rick-and-morty.jpg")' }} >
      
      <div className ={style.nav}>
          <SearchBar
            onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <div>
        <Cards
          characters={characters}
          onClose = {onClose}
          />
      </div>

      <div>
      <Nav onSearch={onSearch}/>
      </div>
      
    </div>
  )
}

export default App;
