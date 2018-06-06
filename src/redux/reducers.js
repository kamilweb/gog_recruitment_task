import { ADD_ALL_GAMES, ADD_GAME_TO_CART, CLEAR_CART, REMOVE_GAME_FROM_CART } from "./actions";

const initialState = {
  gamesState: []
};

export const shoppingCart = (state = initialState.gamesState, { type, changedGame, allGames }) => {
  switch (type) {
    case ADD_ALL_GAMES:
      return {
        allGames
      };

    case ADD_GAME_TO_CART:
    case REMOVE_GAME_FROM_CART:
      const updatedCart = state.allGames.map(game => {
        if (state.allGames[changedGame.id].name === game.name) {
          return (state.allGames[changedGame.id] = changedGame);
        }
        return game;
      });
      return { allGames: updatedCart };

    case CLEAR_CART:
      const clearedCart = state.allGames.map(game => {
        if (game.gameInCart === true) {
          game.gameInCart = false;
          return game;
        }
        return game;
      });
      return { allGames: clearedCart };

    default:
      return state;
  }
};

export const allReducers = {
  gamesState: shoppingCart
};
