import { json, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


export default function Login() {
  const [input, setInput] = useState({})
  const navigate = useNavigate()

  const inputchange = (event) => {
    console.log(event.target.name);
    const name = event.target.name
    const value = event.target.value
    setInput({ ...input, [name]: value })
  }
  console.log(input);

  const register = (e) => {
    e.preventDefault()
    axios.post("http://localhost:2000/login/loginpage", input).then((data) => {
      console.log("success=====>", data);

      localStorage.setItem("LoginDetails",JSON.stringify(data.data.values))
      navigate('/')
    .catch((err)=>{
      console.log(err);
    })

  
      toast.success(data.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }).catch((err) => {
      console.log("err======>", err.response.data.message);
      toast.success(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    })
  }

  

  return (
    <div id="Z">
      <div class="row" id="A"></div>
      <div class="row" id="B">
        <div class="col-sm-1"></div>
        <div class="col-sm-5" id="C" style={{marginTop:"280px"}}> </div>
        {/* <div id="fellow"> <p id="dell">Facebook helps you connect and share <br/>with the people in your life.</p></div> */}
        <div class="dude">
          <ToastContainer />
          <form id="html" onSubmit={register} >
            <center>
              <input placeholder="Email address or phone number" onChange={inputchange} name="Email" className="email"></input>
              <input placeholder="Password" onChange={inputchange} name="password" className="email"></input><br /><br />
              <button>login</button><br /><br />
              <Link to=''>Forgetten password?</Link>
              {/* <Link to={'/Register'}>click</Link> */}
              {/* <a href="">Forgetten password?</a> */}
              <hr></hr>
              <a href="/Register"><button id="gen" className="button">Create New Account</button></a>
            </center>
          </form>
        </div>
        <div class="col-sm-1"></div>

      </div>
      <div class="row" id="D"></div>

    </div>

  )
}
