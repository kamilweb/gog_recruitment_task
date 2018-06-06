import React, { Component, Fragment } from "react";
import { ALL_GAMES } from "../scripts/constants";
import { connect } from "react-redux";
import { addAllGamesToStoreAction, addGameToCartAction } from "../redux/actions";

class Games extends Component {
  componentDidMount() {
    this.props.dispatch(addAllGamesToStoreAction(ALL_GAMES));
  }

  addGameToCart = game => {
    this.props.dispatch(addGameToCartAction(game));
  };

  render() {
    const { allGames } = this.props;
    return (
      <div className="games__wrapper">
        {allGames &&
          allGames.map(game => (
            <div className="game" key={game.name}>
              <img className="game__img" src={game.img} alt={game.name} />
              <div className="game__bottom">
                <p className="game__name">{game.name}</p>
                <div className="game__buttons">
                  {game.gameInCart ? (
                    <div className="game__button">IN CART</div>
                  ) : (
                    <Fragment>
                      {game.discount && (
                        <div className="game__button game__button-discount">{`- ${game.discount}%`}</div>
                      )}
                      {game.price && (
                        <button
                          type="button"
                          onClick={() => this.addGameToCart(game)}
                          className="game__button game__button-price"
                        >
                          {`$ ${game.price}`}
                        </button>
                      )}
                    </Fragment>
                  )}
                  {game.owned && <div className="game__button game__button-owned">OWNED</div>}
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
