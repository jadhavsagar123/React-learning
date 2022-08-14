import React, { useEffect, useState } from 'react'


const Login = () => {

    const [mail ,  Setmail] = useState("")
    const [pass ,  Setpass] = useState("")

    // var user = {
    //     Email:"jadhavsagar2081997@gmail.com",
    //     Pass:"sagar12345" 
    // }

    localStorage.setItem("mail","jadhavsagar2081997@gmail.com")
    localStorage.setItem("password","sagar12345")

  function handelMail(e){
  Setmail(e.target.value)
 }

 function handelPass(event){
    Setpass(event.target.value)
    console.log(pass)
 }

 function handelLogin(){

   const email = localStorage.getItem("mail")
   const passw = localStorage.getItem("password")

   console.log(email)
   console.log(passw)

    if (mail===email || Setpass===passw) {
        localStorage.setItem("token", "sagar")

    }
 }

 useEffect(()=>{
console.log("state changed")
 },[])


  return (
    <div className="mb-3 row col-5 offset-4" style={{marginTop:"40px"}}>
    <form>
    <div className="form-control mb-3">
      <label htmlfor="exampleInputEmail1"  className="form-label">Email address</label>
      <input type="email" onChange={handelMail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
      <input type="" onChange={handelPass} className="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="Button" onClick={handelLogin}
     className="btn btn-primary">Submit </button>
  </form>
  </div>
  )
}

export default Login