import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSoccerBall} from '@fortawesome/free-solid-svg-icons'
import { faGamepad} from '@fortawesome/free-solid-svg-icons'
const Footer=()=>(
<>
<div className="footer container-fluid d-flex justify-content-around ">
<div className="list-unstyled">
<ul>
    <li>SIZING</li>
<li>ABOUT US</li>
<li>SHIPPING</li>
<li>EXCHANGE POLICY</li>
<li>PRIVACY POLICY</li>
<li>TERMS & CONDITIONS</li>
<li>REFUND POLICY</li>
</ul>
</div>

<div className="contact d-flex flex-flex-column ">
    <div> <h2> Sign up for updates</h2></div>
<div><span> Promotions, new products and sales. Directly to your inbox.</span></div>
 

<div>  <input type="text"  className= "subscribe_box" placeholder="MY email address "></input>
 <button className='sub_btn'>Subscribe</button> </div>

</div>
</div>
<div className="footer_bottom d-flex justify-content-around"> 
<div><FontAwesomeIcon  className="btn_hov" icon={faSoccerBall} /></div>
<div>
Copyright © 2023, Sakyaa India. Powered by Shopify
Payment icons
</div>
<div> <FontAwesomeIcon  className="btn_hov"  icon={faGamepad}/></div>
</div>
</>
)
export default Footer