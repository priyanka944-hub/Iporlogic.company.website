import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CSS/portfolio.scss'
import img1 from '/iprologic website/IprologicWebsite/src/Components/Assets/img1.jpg'
import img2 from '/iprologic website/IprologicWebsite/src/Components/Assets/img2.jpg'
import img3 from '/iprologic website/IprologicWebsite/src/Components/Assets/img3.jpg'
import img4 from '/iprologic website/IprologicWebsite/src/Components/Assets/img4.jpg'
import img5 from '/iprologic website/IprologicWebsite/src/Components/Assets/img5.jpg'
import img6 from '/iprologic website/IprologicWebsite/src/Components/Assets/img6.jpg'

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

 <div className='row footer'>
<div className='col-md-3 company'>
<h3>Company</h3>
<p className='terms'>Terms and Conditions</p>
<p  className='privacy'>Privacy Policy</p>
<p  className='support'>Support</p>
<p className='faq'>FAQ</p>
</div>

<div className='col-md-3 link'>
<h3>Quick Links</h3>
<p className='about'>About</p>
<p className='service'>Services</p>
<p className='blog'>Blogs</p>
<p className='contact'>Contact</p>

</div>

<div className='col-md-3 subscribe'>
<h3>Subscribe Us</h3>
<p>Subscribe to get latest news article and resources</p>
<input type='text' placeholder='Subscribe Now...'></input>
<button>Subscribe</button>


</div>
<div className='col-md-3 kit'>
<h3>Mega<span >kit</span></h3>
<p>Support@megakit.com</p>
<p className='number'>+23-456-6588</p>

</div>




</div>
    
    
    </div>
  )
}
