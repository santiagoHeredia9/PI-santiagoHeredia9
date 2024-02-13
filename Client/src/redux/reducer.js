import { FETCH_CHARACTER, ADD_FAV, REMOVE_FAV, FILTER, ORDER, DELETE_CHARACTER } from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};
let allCharactersOrder, myFavoritesOrder, sortOrder;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
      };

    case DELETE_CHARACTER:
      return {
        ...state,
        allCharacters: state.allCharacters.filter((char) => char.id !== payload)
      }
    case ADD_FAV:
      // Verificamos si el personaje ya está en favoritos antes de agregarlo
      if (state.myFavorites.find((char) => char.id === payload.id)) {
        return state; // No hacemos cambios si ya está en favoritos
      }
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== payload
        )
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === payload
        ),
      };

    case ORDER:
      allCharactersOrder = [...state.allCharacters];
      myFavoritesOrder = [...state.myFavorites];

      sortOrder = payload === "D" ? -1 : 1;

      allCharactersOrder.sort((a, b) => sortOrder * (a.id - b.id));
      myFavoritesOrder.sort((a, b) => sortOrder * (a.id - b.id));

      return {
        ...state,
        allCharacters: allCharactersOrder,
        myFavorites: myFavoritesOrder,
      };

    default:
      return state;
  }
};

export default reducer;
