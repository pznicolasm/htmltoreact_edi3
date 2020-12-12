import React, {Component} from 'react';

class Clientes extends React.Component{
    render(){
        return(

            <div>
        <section class="clientes contenedor">
            <h2 class="titulo" >Que dicen nuestros clientes</h2>
            <div class="cards">
                <div class="card">
                    <img src="assets/img/keanu.jpg" alt=""/>
                    <div class="contenido-text-card">
                        <h4>Keanu</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, condimentum quam.</p>
                    </div>
                </div>
                <div class="card">
                    <img src="assets/img/nicolas.jpg" alt=""/>
                    <div class="contenido-text-card">
                        <h4>Nicolas</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, condimentum quam.</p>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default Clientes