import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  state = {
    cartActive: false,
    itemsInCart: 0
  };

  componentWillReceiveProps(nextProps) {
    const { allGames } = nextProps;
    this.setState({
      itemsInCart: this.findItemsInCartNumber(allGames)
    });
  }

  toggleCart = () => {
    this.setState({
      cartActive: !this.state.cartActive
    });
  };

  findItemsInCartNumber = allGames => {
    const gamesInCart = allGames.map(game => game.gameInCart);
    let gamesInCartNumber = 0;
    for (let i = 0; i < gamesInCart.length; i++) {
      gamesInCart[i] && gamesInCartNumber++;
    }
    return gamesInCartNumber;
  };

  render() {
    const { cartActive } = this.state;
    return (
      <Fragment>
        <div className="cart__button" onClick={this.toggleCart}>
          <div className="cart__button-basket">
            <img className="game__img" src="images/basket.svg" alt="GOG.COM" />
          </div>
          <div className="cart__button-number">{this.state.itemsInCart}</div>
        </div>
        <div className="cart__wrapper">
          <div className="cart__top">
            <div className="cart__top-desc">{this.state.itemsInCart}</div>
            <div className="cart__top-price">price</div>
            <div className="cart__top-button">
              <button type="button">CLEAR CART</button>
            </div>
          </div>
          <div className="cart__items" />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  allGames: state.gamesState.allGames
});

export default connect(mapStateToProps)(Cart);
