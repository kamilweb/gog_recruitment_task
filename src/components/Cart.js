import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { clearCartAction, removeGameFromCartAction } from "../redux/actions";

class Cart extends Component {
  state = {
    cartActive: false
  };

  toggleCart = () => {
    this.setState({
      cartActive: !this.state.cartActive
    });
  };

  gamePrice = game => {
    let gamePrice = game.price ? game.price : 0;
    let gameDiscount = game.discount ? game.discount / 100 : 1;
    return gamePrice * gameDiscount;
  };

  sumOrderPrice = gamesInCart => {
    let orderPrice = 0;
    for (let i = 0; gamesInCart.length; i++) {
      if (gamesInCart[i]) {
        let gamePrice = gamesInCart[i].price ? gamesInCart[i].price : 0;
        let gameDiscount = gamesInCart[i].discount ? gamesInCart[i].discount / 100 : 1;
        let gameFinalPrice = gamePrice * gameDiscount;
        orderPrice += gameFinalPrice;
      } else {
        return orderPrice;
      }
    }
    return orderPrice;
  };

  clearCart = () => {
    this.props.dispatch(clearCartAction());
  };

  removeGameFromCart = game => {
    this.props.dispatch(removeGameFromCartAction(game));
  };

  render() {
    const { cartActive } = this.state;
    const { allGames } = this.props;
    const gamesInCart = allGames && allGames.filter(game => game.gameInCart === true);
    const gamesInCartNumber = gamesInCart && gamesInCart.length;
    return allGames ? (
      <Fragment>
        <div className="cart__button" onClick={this.toggleCart}>
          <img className="game__img" src="images/basket.svg" alt="GOG.COM" />
          <div className="cart__button-number">{gamesInCartNumber}</div>
        </div>
        {cartActive && (
          <div className="cart__wrapper">
            <div className="cart__top">
              <div className="cart__top-desc">
                {gamesInCartNumber} {gamesInCartNumber === 1 ? "ITEM IN CART" : "ITEMS IN CART"}
              </div>
              <div className="cart__top-price">$ {this.sumOrderPrice(gamesInCart)}</div>
              <button className="cart__top-button" type="button" onClick={this.clearCart}>
                CLEAR CART
              </button>
            </div>
            <div className="cart__items">
              {gamesInCart.map(game => (
                <div className="cart__item" key={game.name}>
                  <img src={game.img} alt={game.name} className="cart__item-img" />
                  <div className="cart__item-middle">
                    <p className="cart__item-title">{game.name}</p>
                    <span className="cart__item-remove" onClick={() => this.removeGameFromCart(game)}>
                      Remove
                    </span>
                  </div>
                  <p className="cart__item-price">$ {this.gamePrice(game)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Fragment>
    ) : null;
  }
}

const mapStateToProps = state => ({
  allGames: state.gamesState.allGames
});

export default connect(mapStateToProps)(Cart);
