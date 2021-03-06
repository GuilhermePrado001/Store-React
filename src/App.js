import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';
import { ProductsList } from './views/Products'
import { Product } from './views/Product';
import { Store } from './store';
import { CarrinhoComponent } from './views/carrinho';
import { NavComponent } from './views/nav';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (   
    <div className="container">
      <Provider store={Store}>
        <div id="main-app">
          <BrowserRouter>
            <NavComponent></NavComponent>
            <Route exact path="/" component={ProductsList}></Route>
            <Route  path="/product/:id" component={Product}></Route>
            <Route  path="/cart" component={CarrinhoComponent}></Route>      
          </BrowserRouter>
        </div>
      </Provider>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
