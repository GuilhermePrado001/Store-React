import React, { Component } from 'react'
import { Products } from '../api/Products'

export class CarrinhoComponent extends Component {

    state = {
        products: []
    }

    async componentWillMount() {
        const { items } = await Products.getProducts()
        this.setState({ products: items.filter(p => localStorage.getItem(p.id) !== null) }) //alterar para id
    }

    removeFromCart = (product) => {
        localStorage.removeItem(product.id)
        this.setState({ products: this.state.products.filter(p => localStorage.getItem(p.id) !== null) })
    }


    render() {
        if (this.state.products.length > 0) {
            return (
                this.state.products.map(product => (
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">{product.name}</h5>
                            <img src={require(`../assets/images/${product.image}`)} />
                            <p class="card-text">{product.description}</p>
                            <div class="btn-group">
                                <button type="button" class="btn btn-danger" onClick={() => this.removeFromCart(product)}>Remover</button>
                                <button type="button" class="btn btn-success">Comprar</button>
                            </div>
                        </div>
                    </div>
                ))
            )
        } else {
            return (
                <div class="alert alert-primary" id="alert" role="alert">
                    Sem itens no carrinho :(
                </div>
            )
        }
    }
}