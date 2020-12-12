import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
               
    
    <main>
        <section class="contenedor sobre-nosotros">
            <h2 class="titulo">Nuestro producto</h2>
            <div class="contenedor-sobre-nosotros">
                <img src="assets/img/bike1.jpg" alt="" class="image-about-us"/>
                <div class="contenido-textos">
                    <h3><span>1</span>Downhill bikes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit luctus ornare vitae, augue class et ac
                        pulvinar at convallis rutrum nibh semper, parturient eu ultricies nam potenti fusce interdum
                        scelerisque eleifend.</p>
                    <h3><span>1</span>Mountain bikes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit luctus ornare vitae, augue class et ac
                        pulvinar at convallis rutrum nibh semper, parturient eu ultricies nam potenti fusce interdum
                        scelerisque eleifend.</p>
                    <h3><span>2</span>Dirt jump bikes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit luctus ornare vitae, augue class et ac
                        pulvinar at convallis rutrum nibh semper, parturient eu ultricies nam potenti fusce interdum
                        scelerisque eleifend.</p>
                </div>
            </div>
        </section>
        <section class="portfolio">
            <div class="contenedor">
                <h2 class="titulo" >Portfolio</h2>
                <div class="galeria-port">
                    <div class="image-port">
                        
                        <img src="assets/img/bike2.jpg" alt=""/>
                        <div class="hover-galery">
                            <img src="assets/img/aprovechar.svg" alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="image-port">
                        <img src="assets/img/bike3.jpg" alt=""/>
                        <div class="hover-galery">
                            <img src="assets/img/aprovechar.svg" alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="image-port">
                        <img src="assets/img/bike4.jpg" alt=""/>
                        <div class="hover-galery">
                            <img src="assets/img/aprovechar.svg" alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                    <div class="image-port">
                        <img src="assets/img/bike5.jpg" alt=""/>
                        <div class="hover-galery">
                            <img src="assets/img/aprovechar.svg" alt=""/>
                            <p>Nuestro trabajo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    </main>
    <section class="up">
        <div>
            <h3><a href="index.html">Inicio</a></h3>
        </div>
    </section>

            </div>
        )
    }
}
export default Home