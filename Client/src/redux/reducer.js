import {
  FETCH_CHARACTER,
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  DELETE_CHARACTER,
  FILTER_ALL,
  LANGUAGE,
} from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
  allMyFavorites: [],
  language: false,
};
let myFavoritesOrder, sortOrder;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LANGUAGE:
      return {
        ...state,
        language: !state.language,
      };
    case FETCH_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
      };

    case DELETE_CHARACTER:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (char) => char.id !== payload
        ),
      };
    case ADD_FAV: {
      const updatedMyFavorites = [...state.myFavorites, payload];
      return {
        ...state,
        myFavorites: updatedMyFavorites,
        allMyFavorites: updatedMyFavorites, // Actualiza allMyFavorites con la copia sin filtrar
      };
    }
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== payload),
      };

    case FILTER: {
      const filteredFavorites = state.allMyFavorites.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: filteredFavorites,
      };
    }
    case FILTER_ALL:
      return {
        ...state,
        myFavorites: [...state.allMyFavorites],
      };

    case ORDER:
      myFavoritesOrder = [...state.myFavorites];

      sortOrder = payload === "D" ? -1 : 1;

      myFavoritesOrder.sort((a, b) => sortOrder * (a.id - b.id));

      return {
        ...state,
        myFavorites: myFavoritesOrder,
      };

    default:
      return state;
  }
};

export default reducer;
