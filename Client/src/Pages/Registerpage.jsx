import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
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
        console.log(input);
        e.preventDefault()
        axios.post("http://localhost:2000/register/save-register", input).then((data) => {
            console.log(data);
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
            navigate("/")



        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div id="E">
            <div class="row" id="A"></div>
            <div class="row" id="B">
                <div class="col-sm-1"></div>
                <div class="col-sm-5" id="C"></div>
                {/* <div id="fell"> <p id="dell">Facebook helps you connect and share <br />with the people in your life.</p></div> */}
                <div class="col-sm-5" id="box">
                    <ToastContainer />
                    <form onSubmit={register} class="registerform">
                        <center>
                            <h4 id="head">Create an Account</h4>
                            <div class="fixed">
                            <label for="">First Name :</label>
                            <input class="jack" onChange={inputchange} placeholder="First Name" name="first" type="text"></input><br /> <br />
                            <label for="">Last Name :</label>
                            <input class="jack" onChange={inputchange} placeholder="Last Name" name="last" type="text"></input><br /><br />
                            <label id="son" for="">Phone :</label>
                            <input type="number" class="jack" onChange={inputchange} name="phone"></input><br /><br />

                            <input id="hello" class="jack" onChange={inputchange} name="email" placeholder="Email address or phone number"></input><br /><br />
                            <input id="hello" class="jack" onChange={inputchange} name="password" placeholder="Password"></input><br /><br />
                            <button>login</button><br /><br />
                            <a href="">Forgetten password?</a>
                            <hr id='hl'></hr>
                            <button id="gen1">Create New Account </button>
                            </div>
                        </center>
                    </form>
                </div>
                <div class="col-sm-1"></div>

            </div>
            <div class="row" id="D"></div>

        </div>

    )
}
