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
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
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
