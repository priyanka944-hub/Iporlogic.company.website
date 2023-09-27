import React from 'react';
import './CSS/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      
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

export default Footer
