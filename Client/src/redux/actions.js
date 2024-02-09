import axios from "axios";

export const FETCH_CHARACTER = "FETCH_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function fetchCharacter(character) {
  return {
    type: FETCH_CHARACTER,
    payload: character,
  };
}

export function deleteCharacter(id) {
  return {
    type: DELETE_CHARACTER,
    payload: id
  }
}

export function addFav(character) {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const response = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
      const response = await axios.delete(endpoint);

      dispatch({
        type: REMOVE_FAV,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al eliminar favorito:", error);
      throw error;
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
