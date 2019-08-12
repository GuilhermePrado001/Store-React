import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions'

class CartComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.products.map(product => (
                        <li>
                            <h4>{product.name}</h4>
                            <img src={require(`../assets/images/${product.image}`)} alt={product.description} />

                            <span>{product.price}</span>
                            <button onClick={() => this.props.removeFromCart(product)}>Remove from cart</button>
                        </li>
                    ))}
                </ul>
                <p>
                    <b>Amount:</b>{this.props.products.reduce((acc, current) => acc + current.price, 0).toFixed(2)}
                </p>
            </div>
        )
    }
}

const mapStateToProps = ({ cart }) => ({
    products: cart.products

})

export const Cart = connect(
    mapStateToProps,
    { removeFromCart }
)(CartComponent)