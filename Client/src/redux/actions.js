export const FETCH_CHARACTER = "FETCH_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const FILTER_ALL = "FILTER_ALL";
export const ORDER = "ORDER";
export const LANGUAGE = "LANGUAGE"

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
  return {
    type: ADD_FAV,
    payload: character,
  };
}

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
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

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export const language = () => {
  return{
    type: LANGUAGE,
  
  }
}