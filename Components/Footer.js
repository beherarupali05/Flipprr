import React from 'react';
import './Footer.css';
import Linkedin from './Linkedin.png';
import Twitter from './Twitter.png';
import PlayStore from './PlayStore.png';
import Apple from './Apple.png';


function Footer() {
   return (
      <div className='Footer_main_div ' >
         <div className='container' >
            <div className='row' >
               <div className='Footer_div mt-5 mb-5' >
                  <div className='Footer_h1'>
                     <h1>flipprr</h1>
                  </div>
                  <div className='Footer_h2' >
                     <h2>Personal</h2>
                     <h2 className='business' >Business</h2>
                  </div>
                  <div className='Footer_logo' >
                     <img style={{ height: "30px" }} className='img-fluid' src={Linkedin} alt="" />
                     <img style={{ height: "30px" }} className='img-fluid' src={Twitter} alt="" />
                     <img style={{ height: "30px" }} className='img-fluid' src={PlayStore} alt="" />
                     <img style={{ height: "30px" }} className='img-fluid' src={Apple} alt="" />
                  </div>
               </div>
            </div>



            <div className='row ' >
               <div className='Footer_div_2' >
                  <div className='col-lg-2 ' >
                     <ul className='Footer_logo_2' >
                        <h1 className='ul_h1' >Account</h1>
                        <li>Budget & Analytics</li>
                        <li>Cards</li>
                        <li>Junior account</li>
                        <li>Pockets</li>
                     </ul>
                  </div>
                  <div className='col-lg-2 ' >
                     <ul className='Footer_logo_2' >
                        <h1 className='ul_h1' >Payment</h1>
                        <li>Pockets</li>
                        <li>Group bills</li>
                        <li>Subscription</li>
                        <li>flipprr shopping</li>
                     </ul>
                  </div>
                  <div className='col-lg-2 col-sm-2' >
                     <ul className='Footer_logo_2'>
                        <h1 className='ul_h1' >Company</h1>
                        <li>About us</li>
                        <li>blog</li>
                        <li>Leadership</li>
                        <li>Newsroom</li>
                        <li>Refferal program</li>
                        <li>Influencers</li>
                     </ul>
                  </div>
                  <div className='col-lg-2 ' >
                     <ul className='Footer_logo_2'>
                        <h1 className='ul_h1' >Help</h1>
                        <li>Help centre</li>
                        <li>community</li>
                        <li>Secrity</li>
                        <li>System status</li>
                        <li>Dev APIs</li>
                        <li>Dev APIs</li>
                     </ul>
                  </div>
                  <div className='col-lg-2' >
                     <ul className='Footer_logo_2'>
                        <h1 className='ul_h1' >Contact</h1>
                        <li>Mail us</li>
                        <li>Locate us</li>
                        <li>Call us</li>
                     </ul>
                  </div>
               </div>
            </div>
            <h3 className='Footer_h3' >© 2021 flipprr Ltd.</h3>
         </div>
      </div>


   )
}

export default Footer;
