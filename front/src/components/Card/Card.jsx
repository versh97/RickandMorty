import style from "./Card.module.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { removeFavorite } from "../../Redux/actions";
import { useState, useEffect } from "react";
import axios from 'axios';
import React from "react";



function Card({ 
    id,
    name, 
    species, 
    gender,
    image, 
    onClose, 
    removeFavorite,
    myFavorites, 
    onRemoveFavorite })
 {
   const[isFav, setIsFav] = useState(false);

   const addFavorite = (character) => {
      axios.post('http://localhost:3001/rickandmorty/fav', character )
      .then(res=>console.log('ok'))
    
    }
   
   const handleFavorite = () => {
      if(isFav){
          setIsFav(false);
          removeFavorite(id);
         } else {
            setIsFav(true);
            addFavorite({ 
               id,
               name, 
               species, 
               gender,
               image, 
                });
         }
      };
      
      useEffect(()=>{
         myFavorites.forEach((fav) => {
            if(fav.id === id){
               setIsFav(true);
            }
         })
      },[myFavorites]);
      
      return (
         <div className={style.container}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
               )}
         <button onClick={onClose} className={style.closeButton}>X</button>
          <Link to={`/detail/${id}`}><h2>Name: {name}</h2></Link>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img  src={image} alt="PersonajeRick&Morty" /> 
         {isFav && <button onClick={() => onRemoveFavorite(id)}>Eliminar de Favoritos</button>}
      </div>
   );
}


const mapDispatchToProps = (dispatch) => {
   return{
      removeFavorite: (id) => dispatch(removeFavorite(id))
   };
};

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);