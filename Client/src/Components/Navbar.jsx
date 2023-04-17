import React from 'react'
import "../App.css"

export default function Navbar() {
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
                    {/* <form id="search_form"> */}
                        <input
                            type="text"
                            placeholder="Search for products brands and more"
                            id="search_input"
                        />
                    {/* </form> */}
                    <i className="fa-solid fa-magnifying-glass" />
                    {/*recent search*/}
                    <div className="recent_Search"></div>
                </div>
                <div className="loginBtn_container">
                    <a href="/Login">Login</a>
                    <div className="login_menu">
                        <div className="login_menu_list">
                            <div className="login_menu_top">
                                <p>New Customer?</p>
                                <a href="/Register">Sign Up</a>
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
                        <i className="fa-solid fa-cart-shopping" style={{marginTop:"15px"}} />
                        <p style={{marginTop:"10px"}}>Cart</p>
                    </div>
                </a>
            </header>
        </div>
    )
}
