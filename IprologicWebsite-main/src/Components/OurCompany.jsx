import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CSS/ourCompany.scss'
import bg from './Assets/home_bg.jpg'
import team1 from './Assets/team-1.jpg'
import team2 from './Assets/team-2.jpg'
import team3 from './Assets/team-3.jpg'
import team4 from './Assets/team-4.jpg'
import team5 from './Assets/team-5.jpg'
import team6 from './Assets/team-6.jpg'

import { ArrowRight, AwardFill, CaretRight, CaretRightFill, CcSquare, ChatRight, ChatSquare, Check, CollectionPlay, Flag, Person, TextRight } from 'react-bootstrap-icons';
export default function OurCompany() {
  return (
    <div className='our_comapny'>

            <div className='about'>

                 <div className='sub'>

                        <p>About Us</p>
                        <h2><b>Our Company</b></h2>
                        <p>Home/ About Us</p>
                 </div>

            </div>

            <div className='dynamic'>

                    <div className='row'>
                        <div className='col-6'>

                        <p className='para'><b>What we are</b></p>
                        <h3><b>We are dynamic team of creative people</b></h3>
                        <p className='paras'>We provide consulting services in the area of IFRS and management reporting,
                         helping companies to reach their highest level. 
                         We optimize business processes, making them easier.</p>
                         <button className='btn'><b>Get Started</b></button>
                         </div>
                        <div className='col-6'>
                                    <img src={bg} alt='image'/>
                        </div>
                    </div>

                    <div className='row our'>
                            <div className='col-4'>
                                    <h2><span className='num'>01.</span> Our Missiion</h2>
                                    <p>llum similique ducimus accusamus laudantium praesentium, 
                                    impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
                            </div>
                            <div className='col-4'>

                                    <h2><span className='num'>02.</span> Vission</h2>
                                    <p>llum similique ducimus accusamus laudantium praesentium, 
                                    impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
                            
                            </div>
                            <div className='col-4'>
                                    <h2><span className='num'>03.</span> Our Approach</h2>
                                    <p>llum similique ducimus accusamus laudantium praesentium, 
                                    impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>                            
                            </div>
                    
                    </div>
            
            </div>


        <div className='project'>

            <div className='number'>
            
                        <div className='row'>
                                <div className='col-3'>
                                        <span className='icon'><Check/></span>
                                        <h3><b>1730 <sub>+</sub></b></h3>
                                        <p>
                                        Project Done</p>
                                </div>
                                <div className='col-3'>
                                            <span className='icon'><Flag/></span>
                                            <h3><b>125 <sub>M</sub></b></h3>
                                            <p>
                                            User Worldwide</p>
                                </div>
                                <div className='col-3'>
                                
                                            <span className='icon'><ChatSquare/></span>
                                            <h3><b>39</b></h3>
                                            <p>
                                            Availble Country</p>
                                
                                </div>
                                <div className='col-3'>

                                <span className='icon'><AwardFill/></span>
                                            <h3><b>14</b></h3>
                                            <p>
                                            Award Winner</p>

                                
                                </div>
                        </div>

            </div>
        
        </div>

        <div className='team'>
                <div className='our'>
                    <p><b>Our Team</b></p>
                    <h2><b>Expert Team member to get </b></h2>
                    <h2><b> best service</b></h2>
                
                </div>

                <div className='row memb'>

                    <div className='col-4'>
                            <img src={team1} alt='mem'/>
                            <h4><b>Justin Hammer</b></h4>
                            <p>Digital Marketer</p>
                    </div>
                    <div className='col-4'>

                            <img src={team2} alt='mem'/>
                            <h4><b>Justin Hammer</b></h4>
                            <p>Digital Marketer</p>
                   </div>
                    <div className='col-4'>
                             <img src={team3} alt='mem'/>
                            <h4><b>Justin Hammer</b></h4>
                            <p>Digital Marketer</p>
                    </div>
                    <div className='col-4'>
                                <img src={team4} alt='mem'/>
                                <h4><b>Justin Hammer</b></h4>
                                <p>Digital Marketer</p>
                    </div>
                    <div className='col-4'>
                            <img src={team5} alt='mem'/>
                            <h4><b>Justin Hammer</b></h4>
                            <p>Digital Marketer</p>
                    
                    </div>
                    <div className='col-4'>
                    <img src={team6} alt='mem'/>
                    <h4><b>Justin Hammer</b></h4>
                    <p>Digital Marketer</p>
            
            </div>
                
                </div>
        
        </div>
        <div className='client'>

            <div className='sub'>
            <p className='para'><b>Clients testimonial</b></p>
            <h1><b>Check what's our clients </b></h1>
            <h1><b>about us</b></h1>
            </div>


                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                         
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                             <div className=" w-100 row">
                                    <div className='col-6'>
                                          <div className='row'>
                                          <div className='col-1'>66</div>
                                          <div className='col-11'>
                                              <div>Quam maiores perspiciants temporibus odio reciendfa-inverse
                                                    errors alias debits atque
                                                </div>
                                                <h3> James Watson</h3>
                                                <p>Excutive theme fresher</p>
                                          </div>
                                          
                                          </div>
                                    </div>
                                    <div className='col-6'>
                                          <div className='row'>
                                              <div className='col-1'>66</div>
                                                  <div className='col-11'>
                                                    <div>Quam maiores perspiciants temporibus odio reciendfa-inverse
                                                    errors alias debits atque</div>
                                                    <h3> James Watson</h3>
                                                    <p>Excutive theme fresher</p>
                                              </div>
                                             </div>
                                    </div>
                                 </div>
                          </div>
                          <div className="carousel-item">
                              <div className=" w-100 row">
                                  <div className='col-6'>
                                      <div className='row'>
                                          <div className='col-1 '>66</div>
                                            <div className='col-11'>
                                                <div>Quam maiores perspiciants temporibus odio reciendfa-inverse
                                          errors alias debits atque</div>
                                      <h3> James Watson</h3>
                                      <p>Excutive theme fresher</p>
                                </div>
                                
                                </div>
                          </div>
                          <div className='col-6'>
                                <div className='row'>
                                    <div className='col-1'>66</div>
                                        <div className='col-11'>
                                          <div>Quam maiores perspiciants temporibus odio reciendfa-inverse
                                          errors alias debits atque</div>
                                          <h3> James Watson</h3>
                                          <p>Excutive theme fresher</p>
                                    </div>
                                   </div>
                          </div> 
                        </div>
                            
                          </div>
                         
                        </div>
                     
                      </div>
                </div>

                <div className='last'>
                <div className='row'>
                  <div className='col-3 bos'>
                        <h4>Company</h4>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Support</p>
                        <p>FAQ</p>
                  </div>
                  <div className='col-3 bos'>
                          <h4>Quick Links</h4>
                          <p>About</p>
                          <p>Servieces</p>
                          <p>Blogs</p>
                          <p>Contact  </p>
                  
                  </div>
                  <div className='col-3 boss'>
                          <h4>Subscribe Us</h4>
                          <p>Subscribe to get latest news article and resources</p>
                          <input type='text' className='form-control' placeholder='Subscribe Now'/>
                          <button className='btn'>SUBSCRIBE</button>
                  </div>
                  <div className='col-3 boo '>
  
                  <h4>Iprologic<span>Solutions</span></h4>
                  <p><b>Support@iprologic.com</b></p>
                  <h5><b>+23-456-6588</b></h5>
                  
                  </div>
                
                </div>
        
        </div>
  
    
    
    
    
    </div>
  )
}
