import style from "./Card.module.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../Redux/actions";
import { useState, useEffect } from "react";



function Card(props) {
   const { name, species, gender, image, onClose, id, addFavorite, removeFavorite, myFavorites, onRemoveFavorite } = props;
   
    const[isFav, setIsFav] = useState(false);
    
    const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
         if(onRemoveFavorite) {
            onRemoveFavorite(id);
        }
      } else {
         setIsFav(true);
         addFavorite(props);
      }
    };

    useEffect(()=>{
      myFavorites.forEach((fav) => {
         if(fav.id === props.id){
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
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   };
};

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);