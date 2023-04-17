import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react";


export default function Products() {
    const [product, setProduct] = useState([])
    const [product1, setProduct1] = useState([])
    const [product2, setProduct2] = useState([])
    const [product3, setProduct3] = useState([])
    const [product4, setProduct4] = useState([])
    const [product5, setProduct5] = useState([])








    useEffect(() => {

        axios.get("http://localhost:2000/view/view-products").then((res) => {
            console.log(res.data)
            setProduct(res.data.data)
        })

    }, [])
    console.log(product)

    useEffect(() => {

        axios.get("http://localhost:2000/view/view-products1").then((res) => {
            console.log(res.data)
            setProduct1(res.data.data)
        })

    }, [])
    console.log(product1)


    useEffect(() => {

        axios.get("http://localhost:2000/view/view-products2").then((res) => {
            console.log(res.data)
            setProduct2(res.data.data)
        })

    }, [])
    console.log(product2)


    useEffect(() => {

        axios.get("http://localhost:2000/view/view-products3").then((res) => {
            console.log(res.data)
            setProduct3(res.data.data)
        })

    }, [])
    console.log(product3)

    useEffect(() => {

        axios.get("http://localhost:2000/view/view-products4").then((res) => {
            console.log(res.data)
            setProduct4(res.data.data)
        })

    }, [])
    console.log(product4)

    useEffect(() => {

        axios.get("http://localhost:2000/view/view-products5").then((res) => {
            console.log(res.data)
            setProduct5(res.data.data)
        })

    }, [])
    console.log(product5)




    return (
        <div>
            <div class="bestofElectronic_Contianer">
                <div class="bestofElectronic_list">
                    <div class="BestofElectronic_item">
                        <div class="bestofElectronic_bigText">Best of Home Appliance</div>
                        <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=3.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3"
                            class="viewAllBtn">View All</a>
                        <div class="bestofElectronicmoreOption">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
                        </div>
                    </div>

                    <div class="bestofElctronic_product_item">
                        {/* <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/k1i6ikw0/solar-light-set/a/k/4/automatic-light-gatello-original-imafgmb2a9pfqxnz.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Sollar Lights</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Syntex</p>
                                </div>
                            </a>

                        </div> */}

                        {product.map((items) =>

                            <div >
                                <a href={`/Productdetails/${items?._id}`} class="BestofElectronic_item">

                                    <div class="bestOfElectornic_image_Product">
                                        <img
                                            src={`/images/${items?.product_image}`} />
                                    </div>
                                    <div class="bestofElectronicmoreOption">
                                        <p class="bestofElectornicProduct_name">{items?.title}</p>
                                        <p class="bestofElecronic_discount">₹{items?.price}</p>
                                        {/* <p class="bestofElectronic_brand">Skyback</p> */}
                                    </div>
                                </a>

                            </div>

                        )}
                        {/* <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kzegk280/kids-t-shirt/k/w/b/5-6-years-mnfbshscmb003-mist-n-fogg-original-imagbfy5t8ku72hh.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">T-shirts</p>
                                    <p class="bestofElecronic_discount">From $49</p>
                                    <p class="bestofElectronic_brand">Cyoles</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/knan98w0/jug/j/y/g/akira-copper-water-jug-1-25-liter-with-2-copper-glass-vpsk-original-imag2y7xh55afjkg.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Jags</p>
                                    <p class="bestofElecronic_discount">From $99</p>
                                    <p class="bestofElectronic_brand">Hectors</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Printers</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">HP</p>
                                </div>
                            </a>

                        </div>

                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/xif0q/kids-three-fourth/j/e/p/10-11-years-boys-three-fouths-shorts-4pk-seyor-original-imagkc8m7zz5xznf.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Pants</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Tata</p>
                                </div>
                            </a>

                        </div> */}

                    </div>


                </div>
            </div>

            {/* ************2nd********************* */}
            <div class="bestofElectronic_Contianer">
                <div class="bestofElectronic_list">
                    <div class="BestofElectronic_item">
                        <div class="bestofElectronic_bigText">Best of Grocery</div>
                        <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=3.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3"
                            class="viewAllBtn">View All</a>
                        <div class="bestofElectronicmoreOption">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
                        </div>
                    </div>

                    <div class="bestofElctronic_product_item">

                        {product1.map((items) =>
                            <div >
                                <a href={`/Productdetails/${items?._id}`} class="BestofElectronic_item">

                                    <div class="bestOfElectornic_image_Product">
                                        <img
                                            src={`/images/${items?.product_image}`} />
                                    </div>
                                    <div class="bestofElectronicmoreOption">
                                        <p class="bestofElectornicProduct_name">{items?.title}</p>
                                        <p class="bestofElecronic_discount">₹{items?.price}</p>
                                        {/* <p class="bestofElectronic_brand">Tata</p> */}
                                    </div>
                                </a>

                            </div>
                        )}
                        {/* <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kq9ta4w0/pooja-thali-set/s/w/i/kanha-ji-bartan-123-bellazy-original-imag4bgck3jkqhyd.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Pooja</p>
                                    <p class="bestofElecronic_discount">From $65</p>
                                    <p class="bestofElectronic_brand">Sripal</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Cofee Powder</p>
                                    <p class="bestofElecronic_discount">From $49</p>
                                    <p class="bestofElectronic_brand">Nescafe</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Detergents</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">HP</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/xif0q/sweet-mithai/c/n/4/400-agra-petha-agra-famous-petha-sweet-dry-agra-peda-winter-original-imagkcbnhzh2vvbk.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Sweets</p>
                                    <p class="bestofElecronic_discount">From $99</p>
                                    <p class="bestofElectronic_brand">Hyder</p>
                                </div>
                            </a>

                        </div>

                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/xif0q/sunscreen/x/8/6/100-spf15-skin-lighten-brightening-whitening-sun-screen-lotion-original-imageaajzz9ngffk.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Sun Creams</p>
                                    <p class="bestofElecronic_discount">From $19</p>
                                    <p class="bestofElectronic_brand">Glow</p>
                                </div>
                            </a>

                        </div> */}

                    </div>


                </div>
            </div>
            {/* **************************3rd************************** */}
            <div class="bestofElectronic_Contianer">
                <div class="bestofElectronic_list">
                    <div class="BestofElectronic_item">
                        <div class="bestofElectronic_bigText">Best of Electronics</div>
                        <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=3.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3"
                            class="viewAllBtn">View All</a>
                        <div class="bestofElectronicmoreOption">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
                        </div>
                    </div>

                    <div class="bestofElctronic_product_item">
                        {product2.map((items) =>
                            <div >
                                <a href={`/Productdetails/${items?._id}`} class="BestofElectronic_item">

                                    <div class="bestOfElectornic_image_Product">
                                        <img
                                            src={`/images/${items?.product_image}`} />
                                    </div>
                                    <div class="bestofElectronicmoreOption">
                                        <p class="bestofElectornicProduct_name">{items?.title}</p>
                                        <p class="bestofElecronic_discount">₹{items?.price}</p>
                                        {/* <p class="bestofElectronic_brand">HP</p> */}
                                    </div>
                                </a>

                            </div>
                        )}
                        {/* <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Moniters</p>
                                    <p class="bestofElecronic_discount">From $999</p>
                                    <p class="bestofElectronic_brand">Dell</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Projectors</p>
                                    <p class="bestofElecronic_discount">From $999</p>
                                    <p class="bestofElectronic_brand">Toshiba</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kuczmvk0/cases-covers/back-cover/w/w/t/m-12954-colorcase-original-imag7g7knnn66wdh.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Mobile covers</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Samsung</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Cameras</p>
                                    <p class="bestofElecronic_discount">From $750</p>
                                    <p class="bestofElectronic_brand">Canon</p>
                                </div>
                            </a>

                        </div>

                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Shaver</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Phillips</p>
                                </div>
                            </a>

                        </div>

                    </div>

                    <div class="bestofElctronic_product_item">
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/k1i6ikw0/solar-light-set/a/k/4/automatic-light-gatello-original-imafgmb2a9pfqxnz.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Sollar Lights</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Syntex</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kg9qbgw0/small-travel-bag/k/n/d/lightweight-60-l-luggage-travel-duffel-bag-with-2-wheels-purple-original-imafwjhfzcvyfqve.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Bags</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Skyback</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kzegk280/kids-t-shirt/k/w/b/5-6-years-mnfbshscmb003-mist-n-fogg-original-imagbfy5t8ku72hh.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">T-shirts</p>
                                    <p class="bestofElecronic_discount">From $49</p>
                                    <p class="bestofElectronic_brand">Cyoles</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/knan98w0/jug/j/y/g/akira-copper-water-jug-1-25-liter-with-2-copper-glass-vpsk-original-imag2y7xh55afjkg.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Jags</p>
                                    <p class="bestofElecronic_discount">From $99</p>
                                    <p class="bestofElectronic_brand">Hectors</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Printers</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">HP</p>
                                </div>
                            </a>

                        </div>

                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/xif0q/kids-three-fourth/j/e/p/10-11-years-boys-three-fouths-shorts-4pk-seyor-original-imagkc8m7zz5xznf.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Pants</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Tata</p>
                                </div>
                            </a>

                        </div> */}

                    </div>


                </div>
            </div>


            {/* ***********************4th************************** */}
            <div class="bestofElectronic_Contianer">
                <div class="bestofElectronic_list">
                    <div class="BestofElectronic_item">
                        <div class="bestofElectronic_bigText">Best of Travels</div>
                        <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=3.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3"
                            class="viewAllBtn">View All</a>
                        <div class="bestofElectronicmoreOption">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
                        </div>
                    </div>

                    <div class="bestofElctronic_product_item">
                        {product3.map((items) =>

                            <div >
                                <a href={`/Productdetails/${items?._id}`} class="BestofElectronic_item">

                                    <div class="bestOfElectornic_image_Product">
                                        <img
                                            src={`/images/${items?.product_image}`} />
                                    </div>
                                    <div class="bestofElectronicmoreOption">
                                        <p class="bestofElectornicProduct_name">{items?.title}</p>
                                        <p class="bestofElecronic_discount">₹ {items?.price} </p>
                                        {/* <p class="bestofElectronic_brand">Syntex</p> */}
                                    </div>
                                </a>

                            </div>
                        )}
                        {/* <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kg9qbgw0/small-travel-bag/k/n/d/lightweight-60-l-luggage-travel-duffel-bag-with-2-wheels-purple-original-imafwjhfzcvyfqve.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Bags</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Skyback</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kzegk280/kids-t-shirt/k/w/b/5-6-years-mnfbshscmb003-mist-n-fogg-original-imagbfy5t8ku72hh.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">T-shirts</p>
                                    <p class="bestofElecronic_discount">From $49</p>
                                    <p class="bestofElectronic_brand">Cyoles</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/knan98w0/jug/j/y/g/akira-copper-water-jug-1-25-liter-with-2-copper-glass-vpsk-original-imag2y7xh55afjkg.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Jags</p>
                                    <p class="bestofElecronic_discount">From $99</p>
                                    <p class="bestofElectronic_brand">Hectors</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Printers</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">HP</p>
                                </div>
                            </a>

                        </div>

                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/xif0q/kids-three-fourth/j/e/p/10-11-years-boys-three-fouths-shorts-4pk-seyor-original-imagkc8m7zz5xznf.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Pants</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Tata</p>
                                </div>
                            </a>

                        </div> */}

                    </div>


                </div>
            </div>

            
            {/* ************5th********************* */}
            <div class="bestofElectronic_Contianer">
                <div class="bestofElectronic_list">
                    <div class="BestofElectronic_item">
                        <div class="bestofElectronic_bigText">Best of Fashions</div>
                        <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=3.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3"
                            class="viewAllBtn">View All</a>
                        <div class="bestofElectronicmoreOption">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
                        </div>
                    </div>

                    <div class="bestofElctronic_product_item">
                        {product4.map((items) =>
                            <div >
                                <a href={`/Productdetails/${items?._id}`} class="BestofElectronic_item">

                                    <div class="bestOfElectornic_image_Product">
                                        <img
                                            src={`/images/${items?.product_image}`} />
                                    </div>
                                    <div class="bestofElectronicmoreOption">
                                        <p class="bestofElectornicProduct_name">{items?.title}</p>
                                        <p class="bestofElecronic_discount">₹{items?.price}</p>
                                        {/* <p class="bestofElectronic_brand">Tata</p> */}
                                    </div>
                                </a>

                            </div>
                        )}
                        {/* <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kq9ta4w0/pooja-thali-set/s/w/i/kanha-ji-bartan-123-bellazy-original-imag4bgck3jkqhyd.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Pooja</p>
                                    <p class="bestofElecronic_discount">From $65</p>
                                    <p class="bestofElectronic_brand">Sripal</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Cofee Powder</p>
                                    <p class="bestofElecronic_discount">From $49</p>
                                    <p class="bestofElectronic_brand">Nescafe</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/k6fd47k0/nut-dry-fruit/p/z/7/200-100-natural-california-pouch-happilo-original-imafzvw2tcazeur6.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Detergents</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">HP</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/xif0q/sweet-mithai/c/n/4/400-agra-petha-agra-famous-petha-sweet-dry-agra-peda-winter-original-imagkcbnhzh2vvbk.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Sweets</p>
                                    <p class="bestofElecronic_discount">From $99</p>
                                    <p class="bestofElectronic_brand">Hyder</p>
                                </div>
                            </a>

                        </div>

                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/xif0q/sunscreen/x/8/6/100-spf15-skin-lighten-brightening-whitening-sun-screen-lotion-original-imageaajzz9ngffk.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Sun Creams</p>
                                    <p class="bestofElecronic_discount">From $19</p>
                                    <p class="bestofElectronic_brand">Glow</p>
                                </div>
                            </a>

                        </div> */}

                    </div>


                </div>
            </div>



            {/* **************************6th************************** */}``
            <div class="bestofElectronic_Contianer">
                <div class="bestofElectronic_list">
                    <div class="BestofElectronic_item">
                        <div class="bestofElectronic_bigText">Best of Mobiles</div>
                        <a href="https://www.flipkart.com/offers-list/content?screen=dynamic&pk=themeViews%3DDT-OMU-1%3ADealcard~widgetType%3DdealCard~contentType%3Dneo&wid=2.dealCard.OMU&wid=3.dealCard.OMU_3&otracker=hp_omu_Best%2Bof%2BElectronics_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_wc_view-all_3"
                            class="viewAllBtn">View All</a>
                        <div class="bestofElectronicmoreOption">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" />
                        </div>
                    </div>

                    <div class="bestofElctronic_product_item">
                        {product5.map((items) =>
                            <div >
                                <a href={`/Productdetails/${items?._id}`} class="BestofElectronic_item">

                                    <div class="bestOfElectornic_image_Product">
                                        <img
                                            src={`images/${items?.product_image}`} />
                                    </div>
                                    <div class="bestofElectronicmoreOption">
                                        <p class="bestofElectornicProduct_name">{items?.title}</p>
                                        <p class="bestofElecronic_discount">₹ {items?.price}</p>
                                        {/* <p class="bestofElectronic_brand">HP</p> */}
                                    </div>
                                </a>

                            </div>
                        )}
                        {/* <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Moniters</p>
                                    <p class="bestofElecronic_discount">From $999</p>
                                    <p class="bestofElectronic_brand">Dell</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Projectors</p>
                                    <p class="bestofElecronic_discount">From $999</p>
                                    <p class="bestofElectronic_brand">Toshiba</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kuczmvk0/cases-covers/back-cover/w/w/t/m-12954-colorcase-original-imag7g7knnn66wdh.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Mobile covers</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Samsung</p>
                                </div>
                            </a>

                        </div>
                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Cameras</p>
                                    <p class="bestofElecronic_discount">From $750</p>
                                    <p class="bestofElectronic_brand">Canon</p>
                                </div>
                            </a>

                        </div>

                        <div >
                            <a href="/Productdetails" class="BestofElectronic_item">

                                <div class="bestOfElectornic_image_Product">
                                    <img
                                        src="https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70" />
                                </div>
                                <div class="bestofElectronicmoreOption">
                                    <p class="bestofElectornicProduct_name">Shaver</p>
                                    <p class="bestofElecronic_discount">From $499</p>
                                    <p class="bestofElectronic_brand">Phillips</p>
                                </div>
                            </a>

                        </div>
 */}
                    </div>



                </div>
            </div>


        </div>
    )
}
