import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Productdetails() {
  const [viewproduct, setViewproduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
      
      axios.get(`http://localhost:2000/viewsingleproduct/viewsingleproduct/${id}`).then((res)=>{
        console.log(res.data)
        setViewproduct(res.data.data)
      })
    
    }, [])
    console.log(viewproduct)
  

    
  const itemid = (id) => {
    console.log(id);
    const local_data = JSON.parse(localStorage.getItem('LoginDetails'))
    const details_data = {
      user_id: local_data._id,
      product_id: id

    }
    console.log(local_data, details_data)
    axios.post('http://localhost:2000/cart/add-cart', details_data).then((res) => {
      console.log(res)
      navigate('/Cart')
    })


  }


  
  return (
    <div>
      <header className='head'>
        <div className="logo_Container">
          <a href="/">
            <div className="logo">
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
            </div>
          </a>
          <div className="explore">
            <a href="https://www.flipkart.com/plus">
              <p>
                Explore <span className="plus-icon">Plus</span>
              </p>
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
            </a>
          </div>
        </div>
        <div className="search_container">
          <form id="search_form">
            <input
              type="text"
              placeholder="Search for products brands and more"
              id="search_input"
            />
          </form>
          <i className="fa-solid fa-magnifying-glass" />
          {/*recent search*/}
          <div className="recent_Search"></div>
        </div>
        <div className="loginBtn_container">
          <a href="#">Login</a>
          <div className="login_menu">
            <div className="login_menu_list">
              <div className="login_menu_top">
                <p>New Customer?</p>
                <a href="#">Sign Up</a>
              </div>
              <div className="menu_nav_link">
                <a href="https://www.flipkart.com/account/login?ret=%2Faccount%2F%3Frd%3D0%26link%3Dhome_account">
                  <i className="fa-solid fa-circle-user" />
                  <p>My Profile</p>
                </a>
                <a href="#">
                  <img src="./icon/plusBlue.svg" className="menu_nav_icon" />
                  <p>Flipkart plus zone</p>
                </a>
                <a href="#">
                  <img src="./icon/orderIcon.svg" className="menu_nav_icon" />
                  <p>Order</p>
                </a>
                <a href="#">
                  <img src="./icon/wishlistIcon.svg" className="menu_nav_icon" />
                  <p>Wishlist</p>
                </a>
                <a href="#">
                  <img src="./icon/rewardIcon.svg" className="menu_nav_icon" />
                  <p>Rewards</p>
                </a>
                <a href="#">
                  <img src="./icon/giftIcon.svg" className="menu_nav_icon" />
                  <p>Gift Cards</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="nav-link"
          href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect"
        >
          Become a Seller
        </a>
        <div className="more_link">
          More
          <i className="fa-solid fa-angle-down icon_more" />
          <div className="more_menu">
            <div className="more_menu_list">
              <a href="https://www.flipkart.com/communication-preferences/push?t=all">
                <img src="./icon/notificationIcon.svg" className="menu_nav_icon" />
                <p>Notification Preferences</p>
              </a>
              <a href="https://www.flipkart.com/helpcentre">
                <img src="./icon/customerIcon.svg" className="menu_nav_icon" />
                <p>24 X 7 Customer Care</p>
              </a>
              <a href="https://advertising.flipkart.com/login?returl=/?otracker=ch_vn_advertise_header">
                <img src="./icon/advertiseIcon.svg" className="menu_nav_icon" />
                <p>Advertise</p>
              </a>
              <a href="https://www.flipkart.com/mobile-apps?otracker=ch_vn_mobile_apps">
                <img src="./icon/downloadIcon.svg" className="menu_nav_icon" />
                <p>Download App</p>
              </a>
            </div>
          </div>
        </div>
        <a href="/cart">
          <div className="card_link">
            <i className="fa-solid fa-cart-shopping" style={{ marginTop: "15px" }} />
            <p style={{ marginTop: "10px" }}>Cart</p>
          </div>
        </a>
      </header>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 mt-5'>
            <img src={`/images/${viewproduct?.product_image}`} style={{ width: 400 }} alt='' className='img-fluid'></img>
          </div>
          <div className='col-sm-6 mt-5'>
            <h1 className='display-6' id='men'></h1>
            <h2 id='shirt'>{viewproduct?.title}</h2>
            <h4>Rating 4.1  <span class="fa fa-star"></span></h4>
            <br></br>
            <h2>₹{viewproduct?.price}</h2>
            <br></br>
            <p>Care Instructions: Machine Wash
              Fit Type: Slim Fit
              Soft cotton breathable fabric
              Stylish double pocket shirt with badge embroidery details
              Sleeve type: Long Sleeve
              Care Instructions: Machine Wash
              Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours.
              Regular Fit: The t-shirt is framed in a Regular Fit for a relaxed feel.
              Polo Collar: This t-shirt is designed with a polo collar.
              Solid: The t-shirt is available in solid pattern.
              Soft Handfeel: The fabric is extremely soft and comfortable, keeping you at ease for hours.
            </p>
            <a href="/cart" className='btn btn-outline-dark' onClick={() => itemid(viewproduct._id)}>Add to cart</a>
          </div>
        </div>
      </div>
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
