export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const GET_CHARACTERS_DETAIL = 'GET_CHARACTERS_DETAIL'; 


export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};


export const addFavorite = (character) =>{
    return{ type: ADD_FAVORITE, payload: character};
};

export const removeFavorite = (id) =>{
    return{ type: REMOVE_FAVORITE, payload: id}
};

export const getCharacters = (id) => {
  return function (dispatch){
    const URL_BASE = "https://localhost:3001/rickandmorty";
    
    fetch(`${URL_BASE}/detail/${id}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: GET_CHARACTER_DETAIL, payload: data });
    })
  }
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
