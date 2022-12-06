import React from 'react';
import './Header.css';
import Header_img from './Header_img.png';
import Apple1 from './Apple1.png';
import PlayStore1 from './PlayStore1.png';
import ArrowMark2 from './ArrowMark2.png';

function Header() {
  return (
    <div className='Header_main_div pb-5' >
      <div className='container'>
        <div className='row' >
          <div className='col-lg-6 mt-5 pt-5'>
            <div className='Header_div' >
              <h4 id='H_h4' >Get up to 10% Cashback on first payment  <img style={{ height: "10px" }} src={ArrowMark2} alt="" /> </h4>
              <h1 id='H_h1'>Digital Payments<br></br> Made Simple.</h1>
              <p id='H_p' >Free Payment Gateway. Supports Netbanking,<br></br> Credit, Debit Cards, UPI.</p>

              <button className='Header_btn' >
                <div className='header_btn_div' >
                  <img id='logo_1' src={Apple1} alt="" />
                  <div>
                    <p id='btn-p' >Available on</p>
                    <h6 id='btn-h6' >App Store</h6>
                  </div>
                </div>
              </button>
              <button className='Header_btn m-3' >
                <div className='header_btn_div' >
                  <img id='logo_2' src={PlayStore1} alt="" />
                  <div>
                    <p id='btn-p' >Available on</p>
                    <h6 id='btn-h6' >Play Store</h6>
                  </div>
                </div>
              </button>

              <div className='input_div mt-3' >
              <label>
                <input  type='text' placeholder=' +91 Phone number'></input>
                <button className='input_btn' >Get started</button>
              </label>
              </div>
            </div>
          </div>

          <div className='col-lg-6 mb-5 mt-5' >
            <img className='img-fluid' src={Header_img} alt="" ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;