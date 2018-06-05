import { ADD_ALL_GAMES, ADD_GAME_TO_CART, REMOVE_GAME_FROM_CART } from "./actions";

const initialState = {
  gamesState: []
};

export const shoppingCart = (state = initialState.gamesState, { type, addedGame, allGames }) => {
  switch (type) {
    case ADD_ALL_GAMES:
      return {
        allGames
      };
    case ADD_GAME_TO_CART, REMOVE_GAME_FROM_CART:
      state.allGames.map(game => {
        if (state.allGames[addedGame.id].name === game.name) {
          state.allGames[addedGame.id] = addedGame;
        }
      });
      return { ...state };

    default:
      return state;
  }
};

export const allReducers = {
  gamesState: shoppingCart
};
