import { useState } from "react";

import './Forms.css'
export default function Forms(){
    const [number, setNumber] = useState("");
    const [names, setNames] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function Send(e){
       document.getElementById("one").innerHTML = `Your name is ${names} and your email is ${email} your phone number is ${phone} and number ${number}`
    e.preventDefault();
    }
    // function Send(){
    //     alert(
    //         `Your name is ${names} and your email is ${email}
    //          Phone Number: ${phone}
    //          Number : ${number}`
    //          );
    //     }
    return(
<>
<h2 style={{textAlign:"center",fontFamily:"-moz-initial",fontSize:"30px",fontWeight:"bolder"}}>Our Form</h2>
<p id="one"></p>


<form onSubmit={Send} className="form">
<label htmlFor="">Full Name:</label>
    <input 
    className="input"
    placeholder="Enter full name"
    type="text" 
    value={names} 
    onChange={(e) => setNames(e.target.value)}
    ></input>
    <br />
    <br />
<label htmlFor="">Email:</label>
    <input 
     className="input"
    placeholder="Enter email"
    type="text" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)}
    ></input>
    <br />
    <br />
<label htmlFor="">Phone Number:</label>
    <input 
     className="input"
    placeholder="Enter phone number"
    type="text" 
    value={phone} 
    onChange={(e) => setPhone(e.target.value)}
    ></input>
    <br /><br />
<label htmlFor="">Number:</label>
    <input 
     className="input"
    placeholder="Choose a number"
    type="number" 
    value={number} 
    onChange={(e) => setNumber(e.target.value)}
    ></input>
    <br />
    <br />
<button type="submit" >Click here</button>

</form>
</>

    );
}
