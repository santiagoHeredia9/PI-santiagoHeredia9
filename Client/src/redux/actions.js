import axios from "axios";
export const FETCH_CHARACTER = "FETCH_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const FILTER_ALL = "FILTER_ALL";
export const ASCENDANT_ORDER = "ASCENDANT_ORDER";
export const DESCENDANT_ORDER = "DESCENDANT_ORDER";

export function fetchCharacter(character) {
  return {
    type: FETCH_CHARACTER,
    payload: character,
  };
}

export function deleteCharacter(id) {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
}

export function addFav(character) {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
}

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const filterAll = () => {
  return {
    type: FILTER_ALL,
  };
};

export const aOrderCards = () => {
  return {
    type: ASCENDANT_ORDER,
  };
};

export const dOrderCards = () => {
  return {
    type: DESCENDANT_ORDER,
  };
};
