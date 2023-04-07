import { ADD_FAVORITE, FILTER, REMOVE_FAVORITE, ORDER, GET_FAVORITES } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{...state,
                myFavorites:[...state.allCharacters, action.payload]}
        case REMOVE_FAVORITE:
            return{...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)}
        case FILTER:
            const { allCharacters } = state;
            const filteredFavorites = allCharacters.filter(character => character.gender === action.payload);
            return { ...state, myFavorites: filteredFavorites };
        case ORDER:
             let sortedFavorites;
             if (action.payload === "Ascendente") {
                  sortedFavorites = state.myFavorites.sort((a, b) => a.id - b.id);
                } else if (action.payload === "Descendente") {
                  sortedFavorites = state.myFavorites.sort((a, b) => b.id - a.id);
                } else {
                 sortedFavorites = state.myFavorites;
                }
             return { ...state,myFavorites: sortedFavorites,};
        case GET_FAVORITES:
            return{...state, myFavorites: action.payload};


         default:
            return{...state};
    }
};

export default rootReducer;