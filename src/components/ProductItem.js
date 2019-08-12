import React from 'react'
import { Link } from 'react-router-dom'

export const ProductItem = ({ product }) => (
    <div class="col-sm-6">
     <div class="card">
       <div class="card-body">
         <h5 class="card-title">{product.name}</h5>
         <figure>
             <img className="product-item" src={require(`../assets/images/${product.image}`)}/>
         </figure>
         <a class="badge badge-outline-info">Valor: {product.price}</a>
         <p class="card-text">{product.description}</p>
         <Link to={`/product/${product.id}`} ><a className="btn btn-outline-info">Visitar</a></Link>
         <a className="btn btn-outline-info" onClick={() => handlerClick(product)}>Adicionar ao Carrinho</a>
       </div>
     </div>
     
   </div>  
)
function handlerClick(product){
  if(localStorage.getItem(product.id) === null){  
    localStorage.setItem(product.id,product.name);
  }     
}


