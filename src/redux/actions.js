export const ADD_GAME_TO_CART = "ADD_GAME_TO_CART";
export const REMOVE_GAME_FROM_CART = "REMOVE_GAME_FROM_CART";

export const addGameToCartAction = (game) => ({
  type: ADD_GAME_TO_CART,
  payload: game,
});

export const removeGameFromCartAction = (game) => ({
  type: REMOVE_GAME_FROM_CART,
  payload: game
});
