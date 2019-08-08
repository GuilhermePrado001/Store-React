import React from 'react'
import { Link } from 'react-router-dom'

export const ProductItem = ({ product }) => (
    <li className="product-item">
        <figure>
            <img src={require(`../assets/images/${product.image}`)} alt={product.name} />
        </figure>

        <header>
            <h3>{product.name}</h3>
        </header>

        <span className="product-price">
            <b>Price:</b>
            {product.price}
        </span>

        <p><Link to={`/product/${product.id}`}>More Datails</Link></p>
    </li>
)