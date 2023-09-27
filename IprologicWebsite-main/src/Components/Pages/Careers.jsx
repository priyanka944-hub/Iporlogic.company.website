import React from 'react'
import '../CSS/careers.scss';
import Career from '../Assets/careers.jpg';
const Careers = () => {
  return (
    <>
    <div>
      <div>
        <img src={Career} width={"100%"} height={"400"}></img>
       </div>
       <div className='text'>
        <p>Iprologic is looking for young talented, hardworking developers, testers, business analysts, and other professionals to join our team and help us create our app and software. Ours is a culture that values not only labor but also creativity as a means of advancing one’s career.</p>
       </div>
    </div>
    <section className="sp-three">
       <div className="container">
           <div className="text-center sec-title mb-40">
               <h3 className="mb-20">We are Hiring</h3>
               <div className="texto">
               <p>At Iprologic, we look at each candidates potential and not just existing skill set and past experience when hiring. We believe that ambition, attitude and commitment play an important role in overall development of an individuals success. If your individual values and mindset meets our expectations, we would love to have you in our team.</p>
               <p className="">Iprologic offers its employees the best work environment, fun and rewarding culture, benefits, and empower our employees to meet their full potential and professional growth.</p>
               <p>We have multiple openings and actively hiring in our software development area.</p>
               </div>
           </div>
       </div>
    </section>
   </>
  )
}

export default Careers
