import React from 'react';
import './Portal.css';
import Home from './Home.png';
import manageOne from './manageOne.png';
import manageTwo from './manageTwo.png';
import manageThree from './manageThree.png';
import ArrowMark2 from './ArrowMark2.png';

function Portal() {
  return (
    <div className='portal_main_div ' >
    <div className='container' >
        <div className='row'>
         <div className='col-lg-6 mt-5 pt-3 mb-5' >
          <div className='portal_img' >
         <img  className='img-fluid' src={Home}alt="" />
         </div>
         </div>
         <div className='col-lg-6 p-5 mt-5 ' >
        <div className='portal_div ' >
        <h2 className='P-h2' >For Partners</h2>
        <h1  className='P-h1' >Simple & Easy to use<br></br> Partner Portal</h1>
        <p className='Portal-p' >Lorem ipsum dolor sit amet, consectetur adipiscing <br></br>elit, sed do eiusmod tempor incididunt ut labore et<br></br> dolore magna aliqua. Ut enim ad minim.</p>
        <div className='P-btn-div d-flex' >
        <button className='P-btn' >Get started as Partner</button>
        <h5 className='P-h5 ' >Explore More <img  style={{height:"9px"}}  src={ArrowMark2} alt="" /> </h5>
        </div>
        </div>
         </div>
        </div>



         <div className='portal_logo_1' >
        <div className='row  mt-5 mb-5' >

        <div className='col-lg-4 mb-5' >
        <img src={manageOne} alt="" />
         <div className='portal_logo ps-5' >
         <h3 className='P-h3' >Manage your money</h3>
         <p  className='P-P'>Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna.</p>
        </div>
        </div>

        <div className='col-lg-4 mb-5' >
        <img src={manageTwo} alt="" />
         <div className='portal_logo ps-5' >
         <h3 className='P-h3' >Manage multiple branches</h3>
         <p  className='P-P'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna.</p>
         </div>
        </div>

        <div className='col-lg-4  mb-5' >
        <img src={manageThree} alt="" />
         <div className='portal_logo ps-5' >
         <h3 className='P-h3' >Transfer amounts</h3>
         <p  className='P-P'>Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore et dolore magna.</p>
         </div>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Portal;