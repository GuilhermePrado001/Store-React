import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavComponent extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Alterna navegação">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <Link to='/'> <a class="nav-link">Home <span class="sr-only">(Página atual)</span></a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/cart'> <a class="nav-link">Meu Carrinho <span class="sr-only">(Página atual)</span></a></Link>
                            </li>
                        </ul>      
                    </div>
                </nav>
            </div>
        )
    }
}
