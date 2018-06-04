import React, { Component, Fragment } from "react";
import { ALL_GAMES } from "../scripts/constants";

class Games extends Component {
  render() {
    return (
      <div className="games__wrapper">
        {ALL_GAMES.map(game => (
          <div className="game" key={game.name}>
            <img className="game__img" src={game.img} alt={game.name} />
            <div className="game__bottom">
              <p className="game__name">{game.name}</p>
              <div className="game__buttons">
                {game.owned && <div className="game__button game__button-owned">OWNED</div>}
                {game.gameInCart && <div className="game__button game__button-incart">IN CART</div>}
                {game.discount && <div className="game__button game__button-discount">{`- ${game.discount}%`}</div>}
                {game.price && (
                  <button type="button" className="game__button game__button-price">
                    {`$${game.price}`}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Games;
