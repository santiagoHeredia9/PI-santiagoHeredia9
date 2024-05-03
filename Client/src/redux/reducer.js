import {
  FETCH_CHARACTER,
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  DELETE_CHARACTER,
  FILTER_ALL,
  ASCENDANT_ORDER,
  DESCENDANT_ORDER,
  REGISTER_OR_LOGIN,
} from "./actions";

const initialState = {
  allCharacters: [],
  allFavorites: [],
  myFavorites: [],
  isRegistered: true,
};

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
        allCharacters: state.allCharacters.filter(
          (char) => char.id !== payload
        ),
      };
    case ADD_FAV: {
      return {
        ...state,
        allFavorites: payload,
        myFavorites: payload,
      };
    }
    case REMOVE_FAV:
      return {
        ...state,
        allFavorites: payload,
        myFavorites: payload,
      };

    case FILTER: {
      return {
        ...state,
        myFavorites: state.allFavorites.filter((fav) => fav.gender === payload),
      };
    }
    case FILTER_ALL:
      return {
        ...state,
        myFavorites: state.allFavorites,
      };

    case ASCENDANT_ORDER:
      return {
        ...state,
        myFavorites: [...state.allFavorites].sort((a, b) => a.id - b.id),
      };

    case DESCENDANT_ORDER:
      return {
        ...state,
        myFavorites: [...state.allFavorites].sort((a, b) => b.id - a.id),
      };

    case REGISTER_OR_LOGIN:
      return {
        ...state,
        isRegistered: !state.isRegistered,
      };

    default:
      return state;
  }
};

export default reducer;
