import React, {Component} from 'react';
class About extends React.Component{
    render(){
        return(
            <div>
        <section class="contenedor sobre-nosotros">
            <h2 class="titulo">Nuestros productos</h2>
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
            </div>

        )
    }
}

export default About