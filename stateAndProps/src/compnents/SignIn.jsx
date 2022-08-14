import React from 'react'

const SignIn = () => {
  return (
    <div className='md-3 offset-2'>
    <form>
    <h1>signIn here</h1>
<div className="mb-3 ">
  <label for="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div className="mb-3">
  <label for="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleInputPassword1"/>
</div>
<button type="submit" className="btn btn-info">SignIn</button>
</form>
  </div>
  )
}

export default SignIn
