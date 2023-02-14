
import Featured from "../Components/Featured"
import { useState} from "react"
import { Button } from "react-bootstrap"
import Navigation from "../Components/Navbar"
import Story from "./My_story"
import Offers from "./offers"

import Footer from "./Footer"


const Home=()=>{
const [scrollPosition, setSrollPosition] = useState(true);
var oldScrollY = window.scrollY;

window.onscroll = function(e) {
  if(oldScrollY < window.scrollY){
      console.log("scrolling down ")
      setSrollPosition(false)
  } else {
     console.log("scrolling up ")
     setSrollPosition(true)
  }
  oldScrollY = window.scrollY; 
}


   return(
    <>
   <main>
    <div className="main_image_container">
   <div className="main-image d-flex   flex-column align-items-center  ">
     {/* {scrollPosition<=500 ? <Navigation/>: "" } */}
      { scrollPosition <=200 && scrollPosition ? <Navigation/>:""}
    
    <Button className="btn_hov"> Shop now</Button>
     </div>
     </div>
     <section className="featured" >


 <Featured/>


     </section>
     <section className="accesories d-flex ">
<div className="over">
     <div className="accesory" >
 Accesories
     </div>
     </div>
     <div className="over">
<div className="tops"> 
   Tops
</div>
</div>
</section>
     <section className="local_shop container-fluid">
        <div className=" local d-flex ">
 <h4 className="mb-5 ">Shop Local </h4>
 <p> 
We've been around for 16 years at our cozy Tambaram store and Wadrobe have now decided
 to venture the digital market. Hope you join us on our journey!</p>
        </div>
     </section>
     
      <Story/>

     <section className="offers">
      <Offers/>
     </section>
     {/* <section className="social"><h1 on >social</h1>
     
     <Social/>
     </section> */}
    </main>
    <footer>
      <Footer/>
    </footer>
   </>
   ) 
}
export default Home