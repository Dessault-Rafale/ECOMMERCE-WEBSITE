import React, { useState } from 'react'
import axios from 'axios'




export default function Addproduct() {
  const [file, setFile] = useState("")
  const [first, setfirst] = useState({})
  // const [cat, setCat] = useState({})




  const change = (event) => {
    var name = event.target.name
    var value = event.target.value


    setfirst({ ...first, [name]: value })
    console.log(first);
    
    // setCat({ ...cat, input: value })
  }
  

  // axios.post(`http://localhost:2000/Category/add-category/${category}`, cat).then((res) => {
  //   console.log(res);
  // })

  const addItem = (e) => {
    e.preventDefault()
    console.log(file);

    if (file) {
      let formData = new FormData();
      const filename = file.name
      console.log(filename);
      formData.append('name', filename)
      formData.append('file', file)
      console.log(file);
      console.log("=====>", formData);
      axios.post("http://localhost:2000/Addproduct/upload", formData)
        .then((response) => {
          console.log(response);
        })
    }
    axios.post("http://localhost:2000/Addproduct/add-product", first)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      })

  }


  return (
    <>

      <section className="vh-120 bg-image" id="bgbody" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-10">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" id="formdiv" style={{ borderRadius: '15px', height: '1200px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">ADD PRODUCT</h2>
                    <form className='formdata' onSubmit={addItem}>
                      <div className="form-outline mb-4">
                        <label className="form-label" name="productname" htmlFor="form3Example1cg"> Product Name</label>
                        <input type="text" id="form3Example1cg" onChange={change} name="productname" className="form-control form-control-lg" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" name="productimage" htmlFor="form3Example3cg">Product Image</label>
                        <input type="file" id="form3Example3cg" onChange={(e) => { setFile(e.target.files[0]); setfirst({ ...first, image: e.target.files[0].name }) }} name="image" className="form-control form-control-lg" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">price</label>
                        <input type="text" id="form3Example4cg" onChange={change} name="price" className="form-control form-control-lg" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">Title</label>
                        <input type="text" id="form3Example4cg" onChange={change} name="title" className="form-control form-control-lg" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cdg">Description</label>
                        <input type="text" id="form3Example4cdg" onChange={change} name="description" className="form-control form-control-lg" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cdg">Quantity</label>
                        <input type="text" id="form3Example4cdg" onChange={change} name="quantity" className="form-control form-control-lg" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">Category</label>
                        <form id="form3Example4cdg" style={{ marginLeft: '0px', marginTop: '16px' }} name="description" className="">
                          {/* <label htmlFor="cars">Choose a Category: </label> */}
                          <select name="category" onChange={change} id="category">
                            <option value="All">All</option>
                            <option value="HomeAppliances">Home Appliances</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Travels">Travels</option>
                            <option value="Fashions">Fashions</option>
                            <option value="Mobiles">Mobiles</option>


                          </select>
                        </form>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="submit" id="registerbtn" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >






    </>
  )
}
