import React from 'react'
import Category from './Category'
import Imageslider from './Imageslider'
import Navbar from './Navbar'
import Products from './Products'

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Category />
      <Imageslider />
      <Products />
      {/*   FOOTER   */}
      <div className="m-t-3" />
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                {/*Column1*/}
                <div className="footer-pad">
                  <h6>Help</h6>
                  <address>
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">Payments</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#">Cancellation &amp; Returns</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <hr />
                      <li>
                        <a href="#">Report Infringement</a>
                      </li>
                    </ul>
                  </address>
                </div>
              </div>
              <div className="col-sm-4">
                {/*Column1*/}
                <div className="footer-pad">
                  <h6>Flipkart</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <hr />
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <hr />
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <hr />
                    <li>
                      <a href="#">Flipkart Stories</a>
                    </li>
                    <hr />
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <hr />
                    <li>
                      <a href="">Sell On Flipkart</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                {/*Column1*/}
                <div className="footer-pad">
                  <h6>Misc</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Online Shopping</a>
                    </li>
                    <hr />
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                    <hr />
                    <li>
                      <a href="#">Gift Card</a>
                    </li>
                    <hr />
                    <li>
                      <a href="#">Flipkart First Subscription</a>
                    </li>
                    <hr />
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm" id="footer_g1">
                <i className="fas fa-map-marker" />
                TRACK YOUR <br /> ORDER
              </div>
              <div className="col-sm" id="footer_g1">
                <i className="fas fa-sync" />
                FREE AND EASY <br />
                RETURNS
              </div>
              <div className="col-sm" id="footer_g1">
                <i className="far fa-times-circle" />
                ONLINE <br />
                CANCELLATIONS
              </div>
            </div>
            <div className="row" id="footer-kip">
              <div className="col-sm-8">
                <span>
                  <span className="policies-title">Policies: </span>
                  <a
                    className="po"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Returns Policy
                  </a>
                  <a
                    className="po"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of use
                  </a>
                  <a
                    className="po"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Security
                  </a>
                  <a
                    className="po"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy
                  </a>
                  <a
                    className="po"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Infringement
                  </a>
                </span>
                <span className="_2tFDQF">
                  © 2007-{/* */}2018{/* */}
                  <span className="">Flipkart.com.</span>
                </span>
              </div>
              <div className="col-sm-4">
                <span className="">Keep in touch</span>
                <i className="fab fa-facebook-square" />
                <i className="fab fa-twitter-square" />
                <i className="fab fa-google-plus-square" />
                <i className="fab fa-youtube" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 contact-border" id="contact-div">
                <h6 id="contact-1">Mail Us:</h6>
                <ul>
                  <li id="contact-2">
                    Flipkart Internet Pvt Ltd Block B (Begonia),
                  </li>
                  <li id="contact-2">Ground Floor, Embassy Tech Village,</li>
                  <li id="contact-2">
                    Outer Ring Road, Devarabeesanahalli Village,
                  </li>
                  <li id="contact-2">Varthur Hobli, Bengaluru East Taluk,</li>
                  <li id="contact-2">Bengaluru District,</li>
                  <li id="contact-2">Karnataka, India, 560103.</li>
                </ul>
              </div>
              <div className="col-sm-6" id="contact-div">
                <h6 id="contact-1">Registered Office Address:</h6>
                <ul>
                  <li id="contact-2">Flipkart Internet Private Limited,</li>
                  <li id="contact-2">
                    Vaishnavi Summit, Ground Floor, 7th Main,
                  </li>
                  <li id="contact-2">80 Feet Road, 3rd Block,</li>
                  <li id="contact-2">Koramangala,</li>
                  <li id="contact-2">Bengaluru - 560034</li>
                  <li id="contact-2">India</li>
                  <li id="contact-2">CIN : U51109KA2012PTC066107</li>
                  <li id="contact-2">Telephone: 1800 208 9898</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>



    </div>
  )
}
