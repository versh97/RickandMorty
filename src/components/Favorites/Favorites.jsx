import {useSelector, useDispatch} from 'react-redux';
import Card from '../Card/Card';
import { removeFavorite } from '../../Redux/actions';

const Favorites = () =>{

    const favorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite(id));
    }

    return (
        <>
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