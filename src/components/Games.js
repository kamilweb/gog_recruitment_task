import React, {Component} from "react";
import {ALL_GAMES} from "../scripts/constants";
import {connect} from "react-redux";
import {addAllGamesToStoreAction, addGameToCartAction} from "../redux/actions";

class Games extends Component {

  componentDidMount() {
    this.props.dispatch(addAllGamesToStoreAction(ALL_GAMES))
  }


  addGameToCart = game => {
    this.props.dispatch(addGameToCartAction(game))
  };

  render() {
    const {isGameInCart, allGames} = this.props;
    return (
      <div className="games__wrapper">
        {ALL_GAMES.map(game => (
          <div className="game" key={game.name}>
            <img className="game__img" src={game.img} alt={game.name} />
            <div className="game__bottom">
              <p className="game__name">{game.name}</p>
              <div className="game__buttons">
                {game.gameInCart && <div className="game__button game__button-incart">IN CART</div>}
                {game.owned && <div className="game__button game__button-owned">OWNED</div>}
                {game.discount && <div className="game__button game__button-discount">{`- ${game.discount}%`}</div>}
                {game.price && (
                  <button type="button" onClick={() => this.addGameToCart(game)} className="game__button game__button-price">
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

const mapStateToProps = state => ({
  allGames: state.gamesState.allGames
});

export default connect(mapStateToProps)(Games);
