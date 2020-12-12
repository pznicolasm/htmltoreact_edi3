import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
    <header>
        <nav>
            <a><Link to="/">Inicio</Link></a>
            <a><Link to="/about">Acerca de</Link></a>
            <a><Link to="/portfolio">Portfolio</Link></a>
            <a><Link to="/servicio">Servicios</Link></a>
            <a><Link to="/clientes">Clientes</Link></a>
            <a><Link to="/footer">Contacto</Link></a>
        </nav>

        <section class="textos-header">
            <h1> NICOLAS PEREZ</h1>
            <h2> Espacio de Definicion Institucional III </h2>
        </section>
            
    </header>
            </div>
        )
    }
}

export default Header