import Cards from './components/Cards/Cards'
//import SearchBar from './components/SearchBar/SearchBar'
//import style from "./App.module.css";
import Nav from './components/Nav/Nav';
import {useEffect, useState} from 'react'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from "./components/About/About";
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';




function App () {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = 'cdvr10245@gmail.com';
  const password = "cd21dr97";

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    }
  };

  useEffect(() => {
    !access && navigate('/') 
  },[access]);


  const onSearch = (id) => {
    const URL_BASE = "https://localhost:3001";
    if (characters.find((char) => char.id === id)) {
      alert ("Personaje Repetido!")
    } else {
      fetch(`${URL_BASE}/onsearch/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert('No hay personajes con ese ID');
          }
        })
        .catch((error) => {
          console.log('Error:', error);
          alert('Error al buscar personaje');
        });
    }
  };

   const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
   }


   

  return (
    <div className='App' style={{ padding: '25px'}} >

   {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/> }

 

      <Routes>

  
        <Route path="/home" 
          element={ <Cards
          characters={characters}
          onClose = {onClose}
          />}/>
        
        <Route path="/about" element={<About/>}/>
        <Route path="/favorites" element={<Favorites/>}/>

        <Route path="/detail/:detailId" element={<Detail/>}/>

       

      </Routes>
      
    </div>
  )
}

export default App;
