import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../CSS/pricing.scss'
// import { tfi TfiWand } from "react-icons/tfi";



const Pricing = () => {
  return (
    <div className='pricing'>

    <div className='price'>
    <div className='heading'>
      <h6>Our Services</h6>
      <h1>What We Do</h1>
      <a href='http://localhost:3000/' >Home</a>
     </div>
 </div>
 
 <div className='row content'>
 <div className='col-md-4 '>
 <h6>We are creative</h6>
 <h2>We provide best solution to client with their business problem</h2>
</div>
<div className='col-md-4'>

<h4>Modern & Responsive design</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, aspernatur.</p>
</div>
<div className='col-md-4'>
<h4>Awarded licensed company</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, aspernatur.</p>
</div>
</div>

<div className='mid-content '>
<div className='color'>
<div className='image'>
<div className='heading-1'>
<h6>Our Pricing</h6>
<h1>No hidden Charges.Choose Your Perfect Plan</h1>
</div>
<div className='row'>
<div className='col-md-4 card-1'>
<h5>Free</h5>
<h1>$0</h1>
<h5>Includes</h5>
<p>- Up to 1 User</p>
<p>- Max 100 Item</p>
<p>- 500 Queries</p>
<p>- Basic Statistics</p>
<button>Download Now</button>
</div>
<div className='col-md-4 card-2'>
<h5>Basic</h5>
<h1>$12</h1>
<h5>Includes</h5>
<p>- Up to 5 User</p>
<p>- Max 1000 Item</p>
<p>- 500 Queries</p>
<p>- Standard Statistics</p>
<button>SignUp Now</button>
</div>
<div className='col-md-4 card-3'>
<h5>Premium</h5>
<h1>$39</h1>
<h5>Includes</h5>
<p>- Unlimited User</p>
<p>- Unlimited Item</p>
<p>- Unlimited Queries</p>
<p>- Full Statistics</p>
<button>Download Now</button>
</div>
</div>

<div className='image-2'>
<div className='row'>
<div className='col-md-6 image-content'>
<p className='red'>For Every type business</p>
<p className='black'>Entrust Your Project to Our Best Team of Professionals</p>
</div>
<div className='col-md-6 button'>
<button>Contact Us</button>
</div>
</div>
</div>

</div>
</div>
</div>

<div className='row'>
<div className='col-md-3 company'>
<h3>Company</h3>
<p className='terms'>Terms and Conditions</p>
<p className='privacy'>Privacy Policy</p>
<p className='support'>Support</p>
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

export default Pricing
