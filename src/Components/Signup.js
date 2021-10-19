import React,{useRef,useState} from 'react';
import { Link,useHistory } from 'react-router-dom'
import { auth } from '../Firebase' 

export default function Signup(){
    var emailRef=useRef()
    var passwordRef=useRef()
    var passwordconfirmRef=useRef()
    var [error,setError]=useState('')
    var [loading,setLoading]=useState(false)
    var history = useHistory()
    
    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
     }


     async function handleSub(e){
        e.preventDefault()
         
        //Validation
        if(passwordRef.current.value!==passwordconfirmRef.current.value){
          return setError('Password do not match')
        }
       
      try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value,passwordRef.current.value )
        history.push('/')
      }catch{
          setError("Failed to sign up")
      }
        setLoading(false)
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSub}>
        <div className="container-fluid">
            <h3 align="center">Register</h3>
            {error && <h3 style={{color:'red'}} align='center'>{error}</h3>}
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
              <input type="password" class="form-control" id="password" ref={passwordRef} reqiured></input>
            </div>
            </div>
             <div className="col-sm-4"></div>
            </div>
            <div className="container-fluid">
             <div className="col-sm-4"></div>
             <div className="col-sm-4">
            <div class="form-group">
              <label for="password">Password-Confirmation:</label>
              <input type="password" class="form-control" id="password-confirmation"  ref={passwordconfirmRef} reqiured></input>
            </div>
            </div>
             <div className="col-sm-4"></div>
            </div>
            <div className="container-fluid">
             <div className="col-sm-4"></div>
             <div className="col-sm-4">
            <button  disable={loading} type="submit" class="btn btn-success">Submit</button>
            </div>
             <div className="col-sm-4"></div>
            </div>
            <div className="container-fluid">
             <div className="col-sm-4"></div>
             <div className="col-sm-4">
             <p><strong>Already have an account?</strong>
             <Link to="/login">Login</Link>
             </p>
            </div>
             <div className="col-sm-4"></div>
            </div>
            </form>
            </React.Fragment>
    )
}
