import React from 'react'
 import '../CSS/contact.scss';
import {FaRegAddressBook } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {HiOutlinePhone} from 'react-icons/hi';
import {FiFacebook,FiInstagram, FiLinkedin} from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div>
      <>
    <section className='page-title bg-1'>
      <div className='container1'>
        <div className='row1'>
          <div className='col-md-12 col-14'>
            <div className='block test-center'>
              <span className='text-white'>Contact us</span>
              <h1 class="text-capitalize mb-4 text-lg">Get In Touch</h1>
              <ul className='list-inline'>
                <li className='list-inline-item'>
                <a href="index.html" class="text-white">  <Link to="/">Home</Link></a><a className='text-white'>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <div className=''>
      <div>
      <img src={Images} width={"100%"} height={"400"}></img>
      </div>
      <div className='text'>
        <p className='contact'>Contact us</p>
        <h1 className='Get'>Get In Touch</h1>
         <div className='flex span'>
          <div className='a'>
          <Link to="/">Home</Link>
          </div>
          <div>
            /
          </div>
          <div>
            <placeholder>Contact US</placeholder>
          </div>
         </div>
      </div>
    </div> */}<br/><br/>
       <div className='container'>
         <div className='row'>
           <div className='col-12 col-lg-6 col-md-12 col-sm-12'>
             <form>
               <h1>Contact Form</h1>
               <div className='form-group'>
                 <label for="Name"></label>
                 <input type='text'
               className='form-control'
               placeholder='Your Name'/>
            </div>
            <div className='form-group'>
              <label for="Email"></label>
              <input type='text'
               className='form-control'
               placeholder='Email Address'/>
            </div>
            <div className='form-group mt-4'>
              <textarea name='message' 
              className='form-control'
              rows='4'
              placeholder='Your Message' required>
              </textarea>
               </div>
               <button className= 'mt-3 btn' name='submit' type='submit'>SEND MESSAGE</button>
             </form>
           </div>
           <div className='col-lg-5 col-sm-12'>
            <div>
             <font size="4"><span >We are Professionals</span></font>
             <h1 className='mb-5 mt-2'>Don’t Hesitate to contact with us for any kind of information</h1>
             <ul className='li'>
               <li><span><FaRegAddressBook/>&nbsp;&nbsp;&nbsp;Hitech City, Madhapur, Hyderabad, Telangana 500081</span></li>
               <li><span><HiOutlineMail/>&nbsp;&nbsp;&nbsp;Email:&nbsp;info@iprologicsoftware.com</span></li>
               <li><span><HiOutlinePhone/>&nbsp;&nbsp;&nbsp;Phone:&nbsp;733729828</span></li>
             </ul>
             <ul className='ul'>
               <li><a href="https://www.facebook.com/people/Iprologic/100093319957635/" target="blank"><span><FiFacebook/></span></a></li>
               <li><a href=''><span><FiInstagram/></span></a></li>
               <li><a href="https://www.linkedin.com/company/iprologicsoftware/"><span><FiLinkedin/></span></a></li>
             </ul>
            </div>
           </div>
         </div>
         </div><br/><br/>
         <div>
         <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.3087486765785!2d78.3818507148771!3d17.444930488044175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI2JzQxLjgiTiA3OMKwMjMnMDIuNSJF!5e0!3m2!1sen!2sin!4v1685022198803!5m2!1sen!2sin" width={"100%"}  height={"430"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"></iframe>
         </div><br/><br/><br/><br/>
         <div className='container'>
         <div className='row'>
           <div className='col-12 col-sm-3 col-md-3 col-lg-3'>
             <h4>Company</h4>
             <p className='p'></p>
             <p className='p'>Privacy Policy</p>
             <p className='p'>Support</p>
             <p className='p'>FAQ</p>
           </div>
           <div className='col-12 col-sm-2 col-md-2 col-lg-2'>
             <h4 className='p'><a>Quick Links</a></h4>
             <p className='p'>About</p>
             <p className='p'>Services</p>
             <p className='p'>Blog</p>
             <p className='p'>Contact</p>
           </div>
           <div className='col-12 col-sm-3 col-md-3 col-lg-3'>
            <h4>Subscribe Us</h4>
            <p>Subscribe to get latest news article and resources</p>
            <input type='text'
         className='form-control'
         placeholder='Subscribe Now'/>
         <button className='mt-3 btn'>SUBSCRIBE</button>
        </div>
        <div className='col-12 col-sm-3 col-md-3 col-lg-3'>
          <h4>Iprologicsoftware</h4>
          {/* <p><a href="mailto:info@iprologicsoftware.com">info@iprologicsoftware.com</a></p> */}
          <p>info@iprologicsoftware.com</p>
          <p className='p'> 7337298283</p>
        </div>
      </div>
      <br/><hr></hr>
      <div className='row'>
        <div className='col-12  col-sm-6 col-md-6 col-lg-6'>
             <div>
             <p>Copyright © 2020, Designed & Developed by <a href='#'>Iprologicsoftware</a></p>
             </div>
           </div>
           <div className='col-12  col-sm-6 col-md-6 col-lg-6'>
             <div>
               <ul className='icon'>
                <li><a href="https://www.facebook.com/people/Iprologic/100093319957635/"><span><FiFacebook/></span>&nbsp;&nbsp;facebook</a></li>
                <li><a href=''><span><FiInstagram/></span>&nbsp;&nbsp;Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/iprologicsoftware/"><span><FiLinkedin/></span>&nbsp;&nbsp;LinkedIn</a></li>
               </ul>
             </div>
           </div>
         </div>
      </div>
     </>
    </div>
  )
}

export default Contact
