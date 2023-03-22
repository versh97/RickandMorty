import {useSelector, useDispatch} from 'react-redux';
import Card from '../Card/Card';
import { removeFavorite,orderCards, filterCards } from '../../Redux/actions';

const Favorites = () =>{

    const favorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite(id));
    }

    return (
        <>
        <div>
            <label htmlFor="sort">Ordenar por:</label>
             <select name="sort" id="sort" onChange={(e) => dispatch(orderCards(e.target.value))}>
              <option value="Ascendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>

            <label htmlFor="filter">Filtrar por:</label>
              <select name="filter" id="filter" onChange={(e) => dispatch(filterCards(e.target.value))}>
               <option value="All">Todos</option>
               <option value="Male">Masculino</option>
               <option value="Female">Femenino</option>
               <option value="Genderless">Sin género</option>
               <option value="unknown">Desconocido</option>
            </select>
</div>

        {favorites.map((fav) => {
            return (<Card 
                key={fav.id}
                id={fav.id}
                name={fav.name}
                species={fav.species}
                gender={fav.gender}
                image={fav.image}
                onRemoveFavorite={handleRemoveFavorite}
            />);
        })}
        </>
    );
};

export default Favorites;