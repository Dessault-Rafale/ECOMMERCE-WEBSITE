import React, { useState, useEffect } from 'react'
import axios from "axios";
export default function Cart() {
    const [data, setData] = useState([])


    useEffect(() => {
        const local_data = JSON.parse(localStorage.getItem('LoginDetails'))
        console.log(local_data)
        axios.get(`http://localhost:2000/cart/view-cart/${local_data._id}`).then((res) => {
            console.log(res.data)
            setData(res.data.data)
        })

    }, [])
    console.log(data)
 

    const removeid = (id) => {
        axios.get(`http://localhost:2000/cartremove/item/${id}`).then((res) => {
            console.log(res);
            window.location.reload()
        })
    }
// const buttonClick = () => {
//     var i = 20;
//     i++;
//     document.getElementById('inc').value = i;
// } 



    return (
        <>
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
            <section className="h-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                                </div>
                            </div>


                            <div className="card rounded-3 mb-4">
                                {data.map((items) =>

                                    <div className="card-body p-4">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                <img src={`/images/${items?.product_image}`} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                <p className="lead fw-normal mb-2 font-weight-bold">{items?.title}</p>
                                                {/* <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p> */}
                                            </div>
                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <input id="form1" style={{width:"60px"}} min={0} name="quantity" defaultValue={items?.quantity} type="number"  className="form-control form-control-sm mt-2" />
                                                <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                    <i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h5 className="mb-0">${items?.price}</h5>
                                            </div>
                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <a href="/cart" className="text-danger" onClick={() => { removeid(items._id) }}><i className="fas fa-trash fa-lg" /></a>
                                            </div>
                                        </div>
                                    </div>

                                )}
                                {/* <div className="card-body p-4">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                        </div>
                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                            <p className="lead fw-normal mb-2">Product Name</p>
                                            // <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p> */}
                                        {/* </div>
                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                <i className="fas fa-minus" />
                                            </button>
                                            <input id="form1" min={0} name="quantity" defaultValue={2} type="number" className="form-control form-control-sm mt-2" />
                                            <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                <i className="fas fa-plus" />
                                            </button>
                                        </div>
                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                            <h5 className="mb-0">Price</h5>
                                        </div>
                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                            <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
                                        </div>
                                    </div>
                                </div> */}

                            </div>


                            <div className="card mb-4">
                                <div className="card-body p-4 d-flex flex-row">
                                    <div className="form-outline flex-fill">
                                        <input type="text" id="form1" className="form-control form-control-lg mt-4 w-75" />
                                        <label className="form-label" htmlFor="form1">Discount code</label>
                                    </div>
                                    <button type="button" className="btn btn-outline-warning btn-lg ms-3 mt-4 w-25">Apply</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
