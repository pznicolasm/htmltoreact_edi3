import React, {Component} from 'react';

class Portfolio extends React.Component{
    render(){
        return(
            <div> 
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
            </div>

        )
    }
}

export default Portfolio