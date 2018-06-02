import {ADD_GAME_TO_CART, REMOVE_GAME_FROM_CART} from "./actions";

const initialState = {
  games: []
};

export const shoppingCard = (state = initialState.games, { type, payload }) => {
  switch (type) {
    case ADD_GAME_TO_CART:
      return {
        ...state,
      };

    case REMOVE_GAME_FROM_CART:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const allReducers = {
  games: shoppingCard,
};
