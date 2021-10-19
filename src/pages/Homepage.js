import React from 'react';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";

var Style={
  color:"#4d88ff",
}

var SpecialisedICU=()=>{window.open('./SpecialisedICU',"_self")}
var FriendlyDoctors=()=>{window.open('./FriendlyDoctors',"_self")}
var Hightechequipments=()=>{window.open('./HighTechEquipments',"_self")}
var Ambulanceservices=()=>{window.open('./AmbulanceServices',"_self")}
var Specialcareformothersandinfants=()=>{window.open('./SpecialCareforMothersandInfants',"_self")}
var Assuranceforhygiene=()=>{window.open('./AssuranceforHygiene',"_self")}


var Homepage =  () =>{
    return(
   <BrowserRouter>
    <React.Fragment>
    <div className="jumbotron text-center" id="Homepage">    
      <div class="row">
       <div className="col-sm-3">
       </div>
       <div className="col-sm-6">
       <h1 style={Style}>Welcome To AmrHospital</h1>
       <h2 style={Style}>Improving Lives Together.</h2>
       </div>
       <div className="col-sm-3">
       </div>
      </div>
</div>
  <div id="services" className="container-fluid">
  <div className="text-center">
    <h2 style={Style}>Services</h2>
    <h4 style={Style}>We provide best medical services in the town</h4>
  </div>
  <br></br>
  <div>
    <div className="col-sm-4 col-xs-12">
    <div class="image-container">
    <img src="https://cdn.discordapp.com/attachments/856389209170116628/899907174912901120/image2.PNG"   height='300px' width='300px'></img>
    <div class="after">
      <br></br><br></br>
      <h4 align="center">Specialised ICU</h4>
      <h4 align="center">We always got your back no matter how small or large the issue is, our specialized icu's will treat  the patience to the last breathe</h4>
      <div className="col-sm-3 col-xs-12"></div>
      <div className="col-sm-6 col-xs-12"><button class="bton info" onClick={SpecialisedICU}>Learn More</button></div>
      <div className="col-sm-3 col-xs-12"></div>
    </div>
    </div>     
    </div>
    <div className="col-sm-4 col-xs-12">
      <div class="image-container">
    <img src="https://cdn.discordapp.com/attachments/856389209170116628/899907175877607434/image3.PNG" height="300px" width="300px"></img>
    <div class="after">
    <br></br><br></br>
      <h4 align="center">Friendly doctors</h4>
      <h4 align='center'>Our doctors will treat you just like a family member , you wont be able to tell a difference between your home and the hospital</h4>
      <div className="col-sm-3 col-xs-12"></div>
      <div className="col-sm-6 col-xs-12"><button class="bton info" onClick={FriendlyDoctors}>Learn More</button></div>
      <div className="col-sm-3 col-xs-12"></div>
    </div>
    </div>   
    </div>       
    <div className="col-sm-4 col-xs-12">
    <div class="image-container">
    <img src="https://cdn.discordapp.com/attachments/856389209170116628/899907175999209492/image4.PNG" height="300px" width="300px"></img>
    <div class="after">
    <br></br><br></br>
      <h4 align="center">High tech equipments</h4>
      <h4 align='center'>We have the best equipments that can do a seamless job at its purpose ,almost never failing us</h4>
      <div className="col-sm-3 col-xs-12"></div>
      <div className="col-sm-6 col-xs-12"><button class="bton info" onClick={Hightechequipments}>Learn More</button></div>
      <div className="col-sm-3 col-xs-12"></div>
    </div>
    </div>   
    </div>
    <div className="col-sm-4 col-xs-12">
    <div class="image-container">
    <img src="https://cdn.discordapp.com/attachments/856389209170116628/899907178574536724/image1.PNG" height="300px" width="300px"></img>
    <div class="after">
    <br></br><br></br>
      <h4 align="center">24/7 ambulance services</h4>
      <h4 align='center'>We provide the patience with 24/7 services so u can count on us all day </h4>
      <div className="col-sm-3 col-xs-12"></div>
      <div className="col-sm-6 col-xs-12"><button class="bton info" onClick={Ambulanceservices}>Learn More</button></div>
      <div className="col-sm-3 col-xs-12"></div>
    </div>
    </div>   
    </div>     
    <div className="col-sm-4 col-xs-12">
    <div class="image-container">
    <img src="https://cdn.discordapp.com/attachments/856389209170116628/899907180952694784/image6.PNG" height="300px" width="300px"></img>
    <div class="after">
    <br></br><br></br>
      <h4 align="center">Special care for mothers and infants</h4>
      <h4 align='center'>The nurses and doctors will always be the next family member if you have a new member joining this world</h4>
      <div className="col-sm-3 col-xs-12"></div>
      <div className="col-sm-6 col-xs-12"><button class="bton info" onClick={Specialcareformothersandinfants}>Learn More</button></div>
      <div className="col-sm-3 col-xs-12"></div>
    </div>
    </div>   
    </div>       
    <div className="col-sm-4 col-xs-12">
      <div class="image-container">
    <img src="https://cdn.discordapp.com/attachments/856389209170116628/899907181187592192/image5.PNG" height="300px" width="300px"></img>
    <div class="after">
    <br></br><br></br>
      <h4 align="center">Assurance for hygiene</h4>
      <h4 align='center'>Our staffs do an amazing job at keeping the hospital clean at all times creating a home like environment</h4>
      <div className="col-sm-3 col-xs-12"></div>
      <div className="col-sm-6 col-xs-12"><button class="bton info" onClick={Assuranceforhygiene}>Learn More</button></div>
      <div className="col-sm-3 col-xs-12"></div>
     </div>
    </div>   
    </div>
    </div>
</div>
</React.Fragment>
</BrowserRouter>
    );
}

export default Homepage