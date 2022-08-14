import React from 'react'

const SignUp = () => {
  return (
    
      <form>
        <h1>signUp here</h1>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleText" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleText" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-info">SignUp</button>
</form>
   
  )
}

export default SignUp
