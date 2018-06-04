import React, {Component, Fragment} from "react";

class Cart extends Component {
  state = {
    cartActive: false
  }

  toggleCart = () => {
    this.setState({
      cartActive: !this.state.cartActive
    })
  }

  render() {
    const {cartActive} = this.state;
    return (
      <Fragment>
        <div className="cart__button" onClick={this.toggleCart}>
          <div className="cart__button-basket">
            <img className="game__img" src="images/basket.svg" alt="GOG.COM" />
          </div>
          <div className="cart__button-number">
            0
          </div>
        </div>
        <div className="cart__wrapper">
          <div className="cart__top">
            <div className="cart__top-desc">
              {`${0} ITEMS IN CART`}
            </div>
            <div className="cart__top-price">
              price
            </div>
            <div className="cart__top-button">
              <button type="button">
                CLEAR CART
              </button>
            </div>
          </div>
          <div className="cart__items">

          </div>
        </div>
      </Fragment>
    );
  }
}
export default Cart;