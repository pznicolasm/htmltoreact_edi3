import React, {Component} from 'react';

class Servicio extends React.Component{
    render(){
        return(

        <section class="about-service">
            <div class="contenedor">
                <h2 class="titulo" >Nuestro servicio</h2>
                <div class="servicio-cont">
                    <div class="servicio-ind">
                        <img src="assets/img/bikebuild.jpg" alt=""/>
                        <h3>Armado</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, condimentum quam.</p>
                    </div>
                    <div class="servicio-ind">
                        <img src="assets/img/bikesevice.jpg" alt=""/>
                        <h3>Service</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, condimentum quam.</p>
                    </div>
                    <div class="servicio-ind">
                        <img src="assets/img/soldbike.jpg" alt=""/>
                        <h3>Venta</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit, condimentum quam.</p>
                    </div>
                </div>
            </div>
        </section>

        )
    }
}


export default Servicio