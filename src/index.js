import React, { useContext,useState,useEffect } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch ,Route,Link,Redirect } from 'react-router-dom'
import './index.css';
import Homepage from './pages/Homepage';
import AmbulanceServices from './pages/AmbulanceServices'
import AssuranceforHygiene from './pages/AssuranceforHygiene'
import FriendlyDoctors from './pages/FriendlyDoctors'
import HighTechEquipment from './pages/HighTechEquipments'
import SpecialCareforMothersandInfants from './pages/SpecialCareforMothersandInfants'
import SpecialisedICU from './pages/SpecialisedICU'
import Login from "./Components/Login"
import Signup from  './Components/Signup';
import { auth } from './Firebase'
import NotFound from './pages/NotFound';


//Auth context
var AuthContext =React.createContext()

 function useAuth(){
    return useContext(AuthContext)
}
 function AuthProvider({children}){
    var [currentUser,setCurrentUser]=useState()
    var [loading,setLoading]=useState()

     function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
     }
     
     function login(email,password){
      return auth.signInWithEmailAndPassword(email,password)
   }

     useEffect(()=>{
        var unsubscriber=auth.onAuthStateChanged(user =>{
          setCurrentUser(user)
          setLoading(false)
            
        })
        return unsubscriber
     },[])
    var value ={
      currentUser,
      signup,
      login,
    }
    return(
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
    );
}

//PrivateRoute
function PrivateRoute({component:Component, ...rest}) {
  var {currentUser} = useAuth()
  return (
       <Route {...rest} render={props=>{ return currentUser ? <Component {...props}/>:<Redirect to="/login"/>}}>
      </Route>
  )
}

//Style
var NavStyle={
  color:"#4d88ff",
}

//Body
function Navbar()
{return(
	<BrowserRouter>
   <nav class="navbar navbar-default navbar-fixed-top" id="Navbar">
    <div class="container">
     <div class="navbar-header">
       <a class="navbar-brand" style={NavStyle}>AmrHospital</a>
     </div>
    <div class="collapse navbar-collapse" >
      <ul class="nav navbar-nav navbar-right">
        <li>
          <Link to="/" style={NavStyle}>Homepage</Link>
        </li>
        <li ><Link to="/signup" style={NavStyle}><span class="glyphicon glyphicon-user"></span>Registration</Link></li>
        <li ><Link to="/login" style={NavStyle}><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
      </ul>
    </div>
  </div>
</nav>
<br></br><br></br><br></br>
  <div>
  <AuthProvider>
  <Switch>
     <Route path="/" exact component={Homepage} />
     <PrivateRoute path="/AmbulanceServices" component={AmbulanceServices}/>
     <PrivateRoute path="/AssuranceforHygiene" component={AssuranceforHygiene}/>
     <PrivateRoute path="/FriendlyDoctors" component={FriendlyDoctors}/>
     <PrivateRoute path="/HighTechEquipments" component={HighTechEquipment}/>
     <PrivateRoute path="/SpecialCareforMothersandInfants" component={SpecialCareforMothersandInfants}/>
     <PrivateRoute path="/SpecialisedICU" component={SpecialisedICU}/>
     <Route path="/signup" component={Signup}/>
     <Route path="/login" component={Login}/>
     <Route component={NotFound}/>
    </Switch>
   </AuthProvider>
   </div>
</BrowserRouter>

	);
}
ReactDom.render(<Navbar/>,document.getElementById('Navbar'));


//Footer
function Footer(){
	return(
       <footer className="container-fluid text-center" id='footer' style={{color:'white',backgroundColor:"#4d88ff",}}>
          Made with Love<span class="glyphicon glyphicon-heart"></span>By Bayezid :)
       </footer>
   );
}

ReactDom.render(<Footer/>,document.getElementById('Footer'));