import React,{useRef,useState} from 'react';
import {Link,useHistory } from 'react-router-dom'
import { auth } from '../Firebase' 

export default function Login() {
var emailRef=useRef()
var passwordRef=useRef()
var [error,setError]=useState('')
var [loading,setLoading]=useState(false)
var history =useHistory()

function login(email,password){
    return auth.signInWithEmailAndPassword(email,password)
 }


async function handleSub(e){
    e.preventDefault() 
  try{
    setError('')
    setLoading(true)
    await login(emailRef.current.value,passwordRef.current.value )
    history.push('/')
  }catch{
      setError("Failed to Login")
  }
    setLoading(false)
}

    return (
        <React.Fragment>
            <form onSubmit={handleSub}>
        <div className="container-fluid">
            <h3 align="center">Login</h3>
             <div className="col-sm-4"></div>
             <div className="col-sm-4">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" ref={emailRef} reqiured></input>
            </div>
            </div>
             <div className="col-sm-4"></div>
             </div>
              
              <div className="container-fluid">
             <div className="col-sm-4"></div>
             <div className="col-sm-4">
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" ref={passwordRef}  reqiured></input>
            </div>
            </div>
             <div className="col-sm-4"></div>
            </div>
            <div className="container-fluid">
             <div className="col-sm-4"></div>
             <div className="col-sm-4">
            <button disable={loading} type="submit" class="btn btn-success">Login</button>
            </div>
             <div className="col-sm-4"></div>
            </div>
            <div className="container-fluid">
             <div className="col-sm-4"></div>
             <div className="col-sm-4">
             <p><strong>Dont have an account?</strong>
             <Link to="/signup">Sign up</Link>
             </p>
            </div>
             <div className="col-sm-4"></div>
            </div>
            </form>
            <br></br><br></br><br></br><br></br>
            </React.Fragment>
    )
}
