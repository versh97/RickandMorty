import axios from 'axios';


export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const GET_CHARACTERS_DETAIL = 'GET_CHARACTERS_DETAIL'; 
export const GET_FAVORITES = 'GET_FAVORITES';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';


export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};


export const addFavorite = (character) =>{
  return function(dispatch){
    dispatch({ type: ADD_FAVORITE, payload: character});
  }
    //return{ type: ADD_FAVORITE, payload: character};
};

export const removeFavorite = (id) =>{
    return{ type: REMOVE_FAVORITE, payload: id}
};

export const getCharacterDetail = (id) => {
  return async function (dispatch){
    const URL_BASE = "http://localhost:3001";
    
    const response = await axios.get(`${URL_BASE}/detail/${id}`)
    dispatch({ type: GET_CHARACTERS_DETAIL, payload: response.data });
  }
};

export const getFavorites = () => {
  return async function  (dispatch){
    const URL_BASE = "http://localhost:3001";
    
    const response = await axios.get(`${URL_BASE}/rickandmorty/fav`)
    dispatch({ type: GET_FAVORITES, payload: response.data }); 
    //payload es lo que se va a enviar al reducer
  }
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
