import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../CSS/portfolio.scss'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import Footer from '../Footer';

export default function Portfolio() {
  return (
    <div className='portfolio'>
    <div className='port'>
    
    <div className='heading'>
    <h6>Latest Works</h6>
    <h1>Portfolio</h1>
    <a href='http://localhost:3000/' >Home</a>
   </div>
    </div>
    
    <div className='content'>
    <h6>Our Services</h6> 
    <h1 >We provide a wide range of creative services</h1>
    </div>

    <div className='images'>

    <div className='row'>

    <div className='col-md-4 '>
    <img className='image1' src={img1} alt="1" />
    <img className= 'image2'    src={img2} alt="2" />
    
    </div>
    
    <div className='col-md-4 '>
    <img className='image3' src={img3} alt="3" />
    <img className='image4' src={img4} alt="4" />
    </div>
    
    
    <div className='col-md-4 '>
    <img className='image5' src={img5} alt="5" />
    <img className='image6'  src={img6} alt="6" />
   
    </div>
    
     </div>
 </div>

 <Footer/>
    
    
    </div>
  )
}

