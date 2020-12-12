import React, {Component} from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
    <footer>
        <div class="contenedor-footer">
            <div class="content-foo">
                <h4>Phone</h4>
                <p>2214187589</p>
            </div>
            <div class="content-foo">
                <h4>Email</h4>
                <p>pznicolasm@gmail.com</p>
            </div>
            <div class="content-foo">
                <h4>Location</h4>
                <p>La Plata, Buenos Aires</p>
            </div>
        </div>
        <h2 class="titulo-final">&copy; pznicolasm | <a href="https://github.com/pznicolasm">Nicolas Perez</a> </h2>
    </footer>
            </div>
        )
    }
}

export default Footer