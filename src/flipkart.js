import React, { useState} from "react";
import {useNavigate} from "react-router-dom"
import "./flipkart.css"
// import Router from "./router.js"
// import Home from "./flipkarthome.js"

function App(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[cpass,setCpass]=useState("")

    const navigate=useNavigate()


   const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const changePass=(e)=>{
        setPass(e.target.value)
    }
    const changeCpass=(e)=>{
        setCpass(e.target.value)
    }

 const handleChange=(event)=>{
    event.preventDefault()
    if(name.length<=5){
        alert("must be enter more than 5 charcters")
    }
    else if(pass.length<=8){
        alert("password must be more than 8 characters")
    }
    else if(pass!==cpass){
        alert("password does not match")
    }
    else{
        alert("sucuessfully submited")
        localStorage.setItem("Name",name)
        localStorage.setItem("Email",email)
        localStorage.setItem("Password",pass)
   
    }
    }
   const login=(event)=>{
    event.preventDefault()

    

    if(name===localStorage.getItem("Name") && pass===localStorage.getItem("Password") && email===localStorage.getItem("Email")) {
      
        alert("success")
        navigate("/app1")

    }
    else{
        alert("check ur credientails")
    } 
}
    // const HandleChange=()=>{
    //     navigate("./app1.js")
    //  }
    return(
        <div>
        <div id="app">
            <center>
                <h3 id="h3">REGISTRATION FROM</h3>
                <form id="only">
                    <label><b>UserName:</b></label><br/>
                    <input type="text" value={name} onChange={changeName}></input><br/><br/>
                    <label><b>Email:</b></label><br/>
                    <input type="email" value={email} onChange={changeEmail}></input><br/><br/>
                    <label><b>Password:</b></label><br/>
                    <input type="password" value={pass} onChange={changePass}></input><br/><br/>
                    <label><b>Confirm Password:</b></label><br/>
                    <input type="password" value={cpass} onChange={changeCpass}></input><br/><br/>
                    <input type="submit" value="signin" id="app" onClick={handleChange}></input>
                </form>

                
            </center>
        </div>
            <div>
                <h3 id="h2">LOGIN PAGE</h3>
                <form id="only1" onSubmit={login}>
                    <center>
                    <label><b>UserName:</b></label><br/>
                    <input type="text"></input><br/><br/>
                    <label><b>Email:</b></label><br/>
                    <input type="email"></input><br/><br/>
                    <label><b>Password:</b></label><br/>
                    <input type="password"></input><br/><br/>
                    <input type="submit" value="login" id="app"></input>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default App;