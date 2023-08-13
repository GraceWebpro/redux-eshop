import React, { useEffect } from "react";
import './Home.css'
import { Parallax } from 'react-parallax'
import Store from '../assets/store.jpg'
import Leaf from '../assets/leaf.jpg'
import Flower from '../assets/flower.jpg'
import ProductContainer from './product/ProductContainer'
import ShoeContainer from './shoe/ShoeContainer'
import ContactForm from './Contact'

//import aod for effect
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    
    return (
        <div>
            <Parallax strength={600} bgImage={Store}>
                <div className='content'>
                    <div className='head-content'>
                        Online <br /> Shopping
                        <button className='head-btn'>Order Now</button>
                    </div>
                </div>
            </Parallax>

            <h3>...</h3>
            <Parallax strength={600} bgImage={Flower} >
                <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                    
                    <div >
                        <ProductContainer />

                    </div>
       
                </div>  
            </Parallax>

            <Parallax strength={600} bgImage={Leaf} >
                <div data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                    
                    <div >
                        <ShoeContainer />

                    </div>
       
                </div>  
            </Parallax>

            <ContactForm />
        </div>
    )
}

export default Home