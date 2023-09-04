import React from "react";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './hero.css'

import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'

const Hero = () =>{
    return(
        <OwlCarousel className="slider"
        items={1}
        loop={true}
        autoPlay={true}
        nav
        >
            <div className="item">
                <img src={img1} alt="image1"/>
                <div className="slide-content">
                    <h2 className="header">Tourist Design Studio</h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget leo sapien. Suspendisse potenti. Aenean vel tellus facilisis, rutrum mi</p>
                    <div className="buttons">
                        <a href="#" className="btn">
                            Button
                        </a>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img2} alt="image1"/>
                <div className="slide-content">
                    <h2 className="header">Arch Design Studio</h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget leo sapien. Suspendisse potenti. Aenean vel tellus facilisis, rutrum mi</p>
                    <div className="buttons">
                        <a href="#" className="btn">
                            Button
                        </a>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={img3} alt="image1"/>
                <div className="slide-content">
                    <h2 className="header">Arch Design Studio</h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget leo sapien. Suspendisse potenti. Aenean vel tellus facilisis, rutrum mi</p>
                    <div className="buttons">
                        <a href="#" className="btn">
                            Button
                        </a>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default Hero