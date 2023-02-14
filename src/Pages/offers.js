import { Button } from "react-bootstrap"
const Offers=()=>

{
const logo=require("../Pages/sheero.jpg")


return (
   
<>
 <div className='offer_cont d-flex flex-column '>
 <div>
    <img src={logo}  className="sheero"alt='sheero'/>
    </div>
    <div className="offer_text d-flex flex-column align-items-center">
   <h3>O F F E R S</h3> 
<p>We sometimes offer discounts at checkout. Do keep an eye out for that.</p>
<Button className="btn_hov mb-5">Happy Shopping!!</Button>
    </div>
 </div>

</>
)
}
export default Offers 