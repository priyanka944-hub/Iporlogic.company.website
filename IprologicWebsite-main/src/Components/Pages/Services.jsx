import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../CSS/services.scss'
import {Android2, BarChart, Layers, Pencil, VectorPen, WindowDesktop}from 'react-bootstrap-icons';
import Footer from '../Footer';


export default function Servieces() {
  return (
    <div className='services'>
   <div className='serve'>
    
      <div className='heading'>
      <h6>Our Services</h6>
      <h1>What We Do</h1>
      <a href='http://localhost:3000/' >Home</a>
     </div>
 </div>
 <div className='content'>
<h6>Our Services</h6> 
<h1 >We provide a wide range of creative services</h1>


<div className='row'>

<div className='col-md-4 heading1 '>
<h4 > <span className='desktop' ><WindowDesktop/></span>Web development.</h4>
<p>A digital agency isn't here to replace your internal team, we're here to partner</p>
<h4 ><span className='desktop'><VectorPen/></span>Branding</h4>
 <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
 <h4><span className='desktop' ><Layers/></span>Interface Design.</h4>
 <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
</div>

<div className='col-md-4 heading1 '>
<h4 ><span className='desktop'><Layers/></span>Interface Design</h4>
<p>A digital agency isn't here to replace your internal team, we're here to partner</p>
 <h4><span className='desktop'><Android2/></span>App Development</h4>
 <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
 <h4><span className='desktop'><BarChart/></span>Interface Design.</h4>
 <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
</div>


<div className='col-md-4 heading1 '>
<h4><span className='desktop'><BarChart/></span>Business Consulting</h4>
<p>A digital agency isn't here to replace your internal team, we're here to partner</p>
 <h4><span className='desktop'><Pencil/></span>Content Creation</h4>
 <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
 <h4><span className='desktop'><VectorPen/></span>Branding.</h4>
 <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
</div>

 </div>
 

<div className='image2'>
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
<Footer/>
    </div>
  )
}


