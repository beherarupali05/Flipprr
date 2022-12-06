import React from 'react';
import './Wallet.css';
import Mask from './Mask Group.png';
import Shield from './Shield_perspective.png';
import wallet from './wallet_img.png';
import gift from './gift_2.png';
import Cone from './Cone.png';
import Apple1 from './Apple1.png';
import PlayStore1 from './PlayStore1.png';
import Rectangle111 from './Rectangle 111.png';

function Wallet() {
  return (
    <div className='wallet_main_div pt-3' >
      <div className='container' >
        <div className='row' >
          <div className='col-lg-6 p-3' >
            <img className='img-fluid' src={Mask} alt="" />
          </div>
          <div className='col-lg-6 p-5 mt-5' >
            <div className='wallet_div ' >
              <h1>Your Personal Digital Wallet<br></br> for All your Needs</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,<br></br> eiusmod tempor incididunt ut labore et.</p>
              <img style={{ height: "80px" }} src={Shield} alt="" />
              <img style={{ marginLeft: "30px" }} src={wallet} alt="" />
              <img style={{ marginLeft: "30px" }} src={gift} alt="" />
              <div>
                <button className='F_btn' >
                  <div className='F_btn_div d-flex' >
                    <img id='logo_1' src={Apple1} alt="" />
                    <div>
                      <p id='btn-p' >Available on</p>
                      <h6 id='btn-h6' >App Store</h6>
                    </div>
                  </div>
                </button>
                <button className='F_btn m-3' >
                  <div className='F_btn_div d-flex' >
                    <img id='logo_2' src={PlayStore1} alt="" />
                    <div>
                      <p id='btn-p' >Available on</p>
                      <h6 id='btn-h6' >Play Store</h6>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h1 className='wallet-h1  pt-5 pb-5' >Don’t just take our word for it</h1>

        <div className='wallet_main_card '>
          <div className='row' >
            <div className='col-lg-4' >
              <div className='wallet_first_card' >
                <div class="wallet_card p-5 mb-5">
                  <div class="wallet_card-body">
                    <p style={{ color: "#09152CBF", fontWeight: "640", fontSize: "20px", color: "#09152CBF" }} class="wallet_card-text mb-5">“ I reccomend @flipprrapp to anyone. Use it for easy bill payments, mobile recharges and even grow your money with it. ”</p>
                    <h5 style={{ color: "#09152CBF" }} class="wallet_card-title ">  <img style={{ height: "50px" }} className='img-fluid me-3' src={Rectangle111} alt="" /> Kevin Toretto</h5>
                  </div>
                </div>
              </div>
            </div>



            <div className='col-lg-4' >
              <div class="wallet_card p-5 mb-5">
                <div class="wallet_card-body">
                  <p style={{ color: "#09152CBF", fontWeight: "640", fontSize: "20px", Color: "#09152CBF" }} class="wallet_card-text mb-5">“ I reccomend @flipprrapp to anyone. Use it for easy bill payments, mobile recharges and even grow your money with it. ”</p>
                  <h5 style={{ color: "#09152CBF" }} class="wallet_card-title ">  <img style={{ height: "50px" }} className='img-fluid me-3' src={Rectangle111} alt="" /> Kevin Toretto</h5>
                </div>
              </div>
            </div>



            <div className='col-lg-4' >
              <div class="wallet_card p-5 mb-5">
                <div class="wallet_card-body">
                  <p style={{ color: "#09152CBF", fontWeight: "640", fontSize: "20px", color: "#09152CBF" }} class="wallet_card-text mb-5">“ I reccomend @flipprrapp to anyone. Use it for easy bill payments, mobile recharges and even grow your money with it. ”</p>
                  <h5 style={{ color: "#09152CBF" }} class="wallet_card-title ">  <img style={{ height: "50px" }} className='img-fluid me-3' src={Rectangle111} alt="" /> Kevin Toretto</h5>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className='last_main_div' >
          <div className='last_div p-5' >
            <div className='last_div_1 m-5 ' >
              <h1 className='W-h1' >Download the App and <br></br>get started for free</h1>
              <p className='w-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et.</p>
              <button className='W_btn' >
                <div className='W_btn_div d-flex' >
                  <img id='logo_1' src={Apple1} alt="" />
                  <div>
                    <p id='btn-p' >Available on</p>
                    <h6 id='btn-h6' >App Store</h6>
                  </div>
                </div>
              </button>
              <button className='W_btn m-3' >
                <div className='W_btn_div  d-flex' >
                  <img id='logo_2' src={PlayStore1} alt="" />
                  <div>
                    <p id='btn-p' >Available on</p>
                    <h6 id='btn-h6' >Play Store</h6>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='wallet_div_2' >
      </div>
    </div>
  )
}

export default Wallet;