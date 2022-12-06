import React from 'react';
import './Financial.css';
import Splash1 from './Splash 1.png';
import Splash2 from './Splash 2.png';
import Splash3 from './Splash 3.png';
import Splash4 from './Splash 4.png';
import Apple1 from './Apple1.png';
import PlayStore1 from './PlayStore1.png';
import Gift from './Gift.png';
import ArrowMark from './ArrowMark.png';
import ArrowMark1 from './ArrowMark1.png';
import Mark from './Mark.png';
import Rectangle81 from './Rectangle 81.png';
import Rectangle85 from './Rectangle 85.png';
import Rectangle86 from './Rectangle 86.png';

function Financial() {
  return (
    <div className='Financial_main_div pb-5' >
      <div className='container' >
        <div className='row'>
          <div id='financial_header' >
            <h1 className='p-5 mt-5' >For all your financial needs</h1>
          </div>
        </div>


        <div className='row' >
          <div className='col-lg-4  ' >
            <div className='first_card' >
              <div class="card  " >
                <img style={{ padding: "15px" }} src={Rectangle81} class="img-fluid" alt="..." />
                <div class="card-body">
                  <h5 class="card-title ms-3">Recharge, Pay bills with <br></br>single click</h5>
                  <div className='d-flex align-items-center' >
                    <p class="card-text  ms-3 pb-3 m-0 flex-grow-1">Explore Bills & Recharge </p>
                    <img style={{ height: "10px" }} src={ArrowMark} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 ' >
            <div class="card " >
              <img style={{ padding: "15px" }} src={Rectangle85} class="img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title ms-3">Easy, Secure & Fast Money<br></br> Transfer worldwide</h5>
                <div className='d-flex align-items-center' >
                  <p class="card-text  ms-3 m-0  pb-3 flex-grow-1">Explore Money transfer </p>
                  <img style={{ height: "10px" }} src={ArrowMark} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4' >
            <div class="card " >
              <img style={{ padding: "15px" }} src={Rectangle86} class="img-fluid" alt="..." />
              <div class="card-body">
                <h5 class="card-title ms-3">Grow your Money through<br></br> Automation Programs</h5>
                <div className='d-flex align-items-center' >
                  <p class="card-text  ms-3 m-0 pb-3 flex-grow-1">Explore Automation & Growth </p>
                  <img style={{ height: "10px" }} src={ArrowMark} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>






        <div className='Financial_div mt-5' >
          <div className='row' >
            <div className='col-lg-6 d-none d-lg-block' >
              <img className='img-fluid ' src={Splash1} alt="" />
            </div>
            <div className='col-lg-6 p-5' >
              <div className='recharge_div mt-5 ' >
                <h1 className='F-h1 p-3' >Recharge, Pay bills & send <br></br>money with one click</h1>
                <div className='col-lg-6 d-block d-lg-none' >
                  <img className='img-fluid' src={Splash1} alt="" />
                </div>
                <div className='p-3' >
                  <p className='F-p'> <img style={{ height: "13px" }} src={Mark} alt="" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et.</p>
                  <p className='F-p' > <img style={{ height: "13px" }} src={Mark} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et.</p>
                  <h2 className='F-h2' >Know more about Bill payments  <img style={{ height: "8px", marginLeft: "20px" }} src={ArrowMark} alt="" /> </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='cashback_div_logo' >
          <div className='Financial_div mt-5' >
            <div className='row' >
              <div className='col-lg-6 p-5' >
                <div className='cashback_div mt-5' >
                  <h1 className='F-h1 p-3' >Get daily exciting discounts<br></br> and cashbacks</h1>
                  <div className='col-lg-6 d-block d-lg-none' >
                    <img className='img-fluid' src={Splash2} alt="" />
                  </div>
                  <div className='p-3' >
                    <p className='F-p' > <img style={{ height: "13px" }} src={Mark} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    <p className='F-p' > <img style={{ height: "13px" }} src={Mark} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    <h2 className='F-h2'>Know more about Bill payments  <img style={{ height: "8px", marginLeft: "20px" }} src={ArrowMark} alt="" /></h2>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 d-none d-lg-block' >
                <img className='img-fluid ' src={Splash2} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className='Financial_div mt-5' >
          <div className='row' >
            <div className='col-lg-6 d-none d-lg-block' >
              <img className='img-fluid ' src={Splash3} alt="" />
            </div>
            <div className='col-lg-6 p-5' >
              <div className='third_div mt-5' >
                <h1 className='F-h1 p-3' >Send money all over the<br></br> world. No hidden fees</h1>
                <div className='col-lg-6 d-block d-lg-none' >
                  <img className='img-fluid' src={Splash3} alt="" />
                </div>
                <div className='p-3' >
                  <p className='F-p' > <img style={{ height: "13px" }} src={Mark} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et.</p>
                  <p className='F-p'> <img style={{ height: "13px" }} src={Mark} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do eiusmod tempor incididunt ut labore et.</p>
                  <h2 className='F-h2'>Know more about Bill payments  <img style={{ height: "8px", marginLeft: "20px" }} src={ArrowMark} alt="" /></h2>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='shop_div_logo' >
          <div className='Financial_div mt-5' >
            <div className='row' >
              <div className='col-lg-6 p-5' >
                <div className='shop_div mt-5' >
                  <h1 className='F-h1 p-3' >Shop from your favourite<br></br> stores and pay securely</h1>
                  <div className='col-lg-6 d-block d-lg-none' >
                    <div className='shop_img' >
                      <img className='img-fluid' src={Splash4} alt="" />
                    </div>
                  </div>
                  <div className='p-3' >
                    <p className='F-p' > <img style={{ height: "13px" }} src={Mark} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    <p className='F-p' > <img style={{ height: "13px" }} src={Mark} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    <h2 className='F-h2'>Know more about Shopping  <img style={{ height: "8px", marginLeft: "20px" }} src={ArrowMark} alt="" /></h2>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 d-none d-lg-block' >
                <div className='shop_img' >
                  <img className='img-fluid' src={Splash4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='gift_logo' >
          <div className='gift_main_div mt-5  ' >
            <div className='row' >
              <div className='col-lg-6 p-5 mt-5' >
                <div className='gift_div ' >
                  <h1 className='g-h1 p-3' >Get Exciting Rewards with <br></br>each Transactions</h1>
                  <div className='p-3' >
                    <p className='g-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et.</p>
                    <p className='gift-p'  >Get up to 10% Cashback on first payment <img style={{ height: "8px", marginLeft: "6px" }} src={ArrowMark1} alt="" /></p>

                    <button className='G_btn' >
                      <div className='G_btn_div' >
                        <img id='logo_1' src={Apple1} alt="" />
                        <div>
                          <p id='btn-p' >Available on</p>
                          <h6 id='btn-h6' >App Store</h6>
                        </div>
                      </div>
                    </button>
                    <button id='G-second-btn' className='G_btn ' >
                      <div className='G_btn_div' >
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
              <div className='col-lg-6' >
                <img className='img-fluid' src={Gift} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Financial;