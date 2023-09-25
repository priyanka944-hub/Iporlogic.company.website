
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img1 from './Assets/home1.jpg'
import carousel from './Assets/card1.jpg'
import slide from './Assets/card3.jpg'
import './CSS/hom.scss'
import { Android2, Award, BarChart, CcCircle, CodeSquare, CollectionPlay, PaintBucket, PencilSquare, Person, PersonAdd, Phone, WindowDesktop } from 'react-bootstrap-icons';


export default function Home() {
  return (
    <div className="mainHome">
      <div className="Home">
        <div className="head">
          <h1>Our work is</h1>
          <h1>presentation of our</h1>
          <h1>capabilities.</h1>

          <button className="btn">Get Started {">"}</button>
        </div>
      </div>
    

    <div className='cards'>
    
      <p className='para'>We are creative & expert people</p>
      
      <h1 className='head'>We work with business & provide</h1>
      <h1 className='head'>solution to client with their business</h1>
      <h1 className='head'>problem</h1>

      <div className='row first'>
      <div className='col-4 box1'>
        <span className='icon1'><WindowDesktop/></span>
        <div className='cont'>
          <h4>Modern & Responsive design</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
        </div>
      </div>
      <div className='col-4'>
        <span className='icon1'><Award/></span>
        <div className='cont'>
          <h4>Awarded licensed company</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
        </div>
      </div>
      <div className='col-4'>
        <span className='icon1'><CollectionPlay/></span>
        <div className='cont'>
        <h4>Build your website Professionally</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
      </div>
      </div>
      </div>

      

    
    </div>
    <div className='row second'>

          <div className='col-5'>
                <img src={img1} className='image' alt='img1'/>
          </div>
          <div className='col-7 team'>
                <p className='para'><b>What we are</b></p>
                <h3 className='head'>We are dynamic team of</h3>
                <h3 className='head'>creative people</h3>

                <div className='row'>
                  <div className='col-2'> <span className='icon2'><PaintBucket/></span></div>
                  <div className='col-10 sol'>
                      <h6 className='head'>We are Perfect Solution</h6>
                      <p className='paras'>We provide consulting services in the area of IFRS and 
                      management reporting, helping companies to reach their highest level.
                       We optimize business processes, making them easier.</p>
                       <button className='btns'>Get Started</button>
                  </div>
                  
                </div>
          </div>
    </div>


    <div className='third'>

          <div className='row'>
              <div className='col-4 num1'>

                    <h3 className='head'><b>1730<sub>+</sub></b></h3>
                    <p className='para'>Project Done</p>
              
              </div>
              <div className='col-2 num2'>
                    <h3 className='head'><b>125<sub className='sub'>M</sub></b></h3>
                    <p className='para'>User Worldwide</p>
              </div>
              <div className='col-2 num2'>
                    <h3 className='head'><b>39</b></h3>
                    <p className='para'>Availble Country</p>
              </div>
              <div className='col-4 num3'>
                        <h3 className='head'><b>14</b></h3>
                        <p className='para'>Award Winner</p>
              </div>
          </div>
    </div>

    <hr/>


    <div className='servieces'>

        <p className='para'><b>Our Servieces</b></p>
        <h1><b>We provide a wide range of </b></h1>
        <h1><b>creative services</b></h1>

        <div className='row'>
            <div className='col-4'>
                    <div className='row web'>
                        <div className='col-2 icon1'><WindowDesktop/></div>
                        <div className='col-10 paras'>
                              <h3><b>Web Development</b></h3>
                              <p>A digital agency isn't here to replace your 
                               internal team, we're here to partner</p>
                        </div>
                    
                    </div>
                  
            </div>
            <div className='col-4'>
            
                            <div className='row web'>
                                <div className='col-2 icon1'><CodeSquare/></div>
                                  <div className='col-10 paras'>
                                  <h3><b>Interface Design.</b></h3>
                                  <p>A digital agency isn't here to replace your 
                                  internal team, we're here to partner</p>
                            </div>
                        
                        </div>
            </div>
            <div className='col-4'>
                                
                        <div className='row web'>
                                <div className='col-2 icon1'><BarChart/></div>
                                  <div className='col-10 paras'>
                                  <h3><b>Business Consulting.</b></h3>
                                  <p>A digital agency isn't here to replace your 
                                  internal team, we're here to partner</p>
                                </div>
                        
                        </div>
            </div>
            <div className='col-4'>
                           <div className='row web'>
                              <div className='col-2 icon1'><CcCircle/></div>
                                    <div className='col-10 paras'>
                                    <h3> <b>Branding.</b></h3>
                                    <p>A digital agency isn't here to replace your 
                                    internal team, we're here to partner</p>
                                    </div>
                          
                          </div>
            
            
            </div>
            <div className='col-4'>
            <div className='row web'>
                              <div className='col-2 icon1'><Android2/></div>
                                    <div className='col-10 paras'>
                                    <h3><b>App development.</b></h3>
                                    <p>A digital agency isn't here to replace your 
                                    internal team, we're here to partner</p>
                                    </div>
                          
                          </div>
            
            
            </div>
            <div className='col-4'>
                          <div className='row web'>
                          <div className='col-2 icon1'><PencilSquare/></div>
                                <div className='col-10 paras'>
                                <h3><b>Content creation.</b></h3>
                                <p>A digital agency isn't here to replace your 
                                internal team, we're here to partner</p>
                                </div>
                      
                      </div>
            
            
            </div>
        </div>
    
    </div>



    <div className='create'>
           <div className='sub'>
                   <div className='card'>

                          <p className='para'><b>We create for you</b></p>
                            <h2>Entrust Your Project</h2>
                            <h2>to Our Best Team of</h2>
                            <h2>Professionals</h2>

                            <p className='paras'>Have any project on mind? </p>
                            <p className='paras'>For immidiate support :</p>

                            <p><span className='icon'><Phone/></span> <span className=''><b>+23 876 65 455</b></span></p>
      
                        </div>
          </div>
    </div>


    <div className='client'>

            <div>
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

          <div className='latest'>

                <div className='article'>
                      <div className='subarticle'>
                              <p><b>Latest News</b></p>
                              <h2><b>Latest articles to enrich</b></h2>
                              <h2><b>Knowledge</b></h2>
                      </div>
                      <div className='row'>
                        <div className='col-4'>
                            <div className="card" style={{width: '25rem'}}>
                                  <img src={carousel} className="card-img-top" alt="..." />
                                  <div className="card-body">
                                    <p className="card-text"><span>Design/ Ui/Ux/ <Person/> admin</span></p>
                                      <h2>How to improve design with typography?</h2>
                                      <button className='btn'>LEARN MORE</button>

                                  </div>
                            </div>
                       </div>
                       <div className='col-4'>
                       <div className="card" style={{width: '25rem'}}>
                             <img src={slide} className="card-img-top" alt="..." />
                             <div className="card-body">
                               <p className="card-text"><span>Design/ Ui/Ux/ <Person/> admin</span></p>
                                 <h2>How to improve design with typography?</h2>
                                 <button className='btn'>LEARN MORE</button>

                             </div>
                       </div>
                  </div>
                  <div className='col-4'>
                  <div className="card" style={{width: '25rem'}}>
                        <img src={carousel} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <p className="card-text"><span>Design/ Ui/Ux/ <Person/> admin</span></p>
                            <h2>How to improve design with typography?</h2>
                            <button className='btn'>LEARN MORE</button>
                        </div>
                      </div>
                    </div>
                </div>
             </div>
    </div>
    <div className='entrust'>
          
              <div className='card-header shadow'>
                  <div className='row'>
                       <div className='col-8'>
                              <p>For Every type business</p>
                               <h2><b>Entrust Your Project to Our Best Team of Professionals</b></h2></div>
                            <div className='col-4'>
                                   <button className='btn'><b>Contact Us</b></button>
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
