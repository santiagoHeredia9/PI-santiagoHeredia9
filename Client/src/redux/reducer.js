import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  allCharacters: [],
  myFavorites: [],
};
let allCharactersOrder, myFavoritesOrder, sortOrder;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case ORDER:
      allCharactersOrder = [...state.allCharacters];
      myFavoritesOrder = [...state.myFavorites];

      sortOrder = action.payload === "D" ? -1 : 1;

      allCharactersOrder.sort((a, b) => sortOrder * (a.id - b.id));
      myFavoritesOrder.sort((a, b) => sortOrder * (a.id - b.id));

      return {
        ...state,
        allCharacters: allCharactersOrder,
        myFavorites: myFavoritesOrder,
      };

    default:
      return { ...state };
  }
};

export default reducer;
