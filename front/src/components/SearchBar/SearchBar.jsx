import style from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({onSearch}) {

   const[character, setCharacter] = useState('')
   const handleChange = (event)=>{
      setCharacter(event.target.value)
   };
   
   return (
      <div className={style.bar}>
         <input type="search" className={style.searchInput} value={character} onChange={handleChange}/>
         <button className={style.searchButton} onClick={() => {onSearch(character)}}>Agregar</button>
      </div>
   );
}

export default SearchBar;