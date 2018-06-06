export const ADD_GAME_TO_CART = "ADD_GAME_TO_CART";
export const REMOVE_GAME_FROM_CART = "REMOVE_GAME_FROM_CART";
export const ADD_ALL_GAMES = "ADD_ALL_GAMES";
export const CLEAR_CART = "CLEAR_CART";

export const addAllGamesToStoreAction = (allGames) => ({
  type: ADD_ALL_GAMES,
  allGames: allGames
});

export const addGameToCartAction = (game) => ({
  type: ADD_GAME_TO_CART,
  changedGame: {
    ...game,
    gameInCart: true
  },
});

export const removeGameFromCartAction = (game) => ({
  type: ADD_GAME_TO_CART,
  changedGame: {
    ...game,
    gameInCart: false
  },
});

export const clearCartAction = () => ({
  type: CLEAR_CART,
});
