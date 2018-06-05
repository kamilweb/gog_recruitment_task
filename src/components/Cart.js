import React, {Component, Fragment} from "react";
import {connect} from "react-redux";

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
    const {gamesInCartNumber} = this.props;
    return (
      <Fragment>
        <div className="cart__button" onClick={this.toggleCart}>
          <div className="cart__button-basket">
            <img className="game__img" src="images/basket.svg" alt="GOG.COM" />
          </div>
          <div className="cart__button-number">
            {gamesInCartNumber ? gamesInCartNumber : 0}
          </div>
        </div>
        <div className="cart__wrapper">
          <div className="cart__top">
            <div className="cart__top-desc">
              {`${gamesInCartNumber ? gamesInCartNumber : 0} ITEMS IN CART`}
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

const mapStateToProps = state => ({
  // gamesInCartNumber: state.gamesState.length
});

export default connect(mapStateToProps)(Cart);