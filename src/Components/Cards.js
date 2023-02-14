import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
const Cards=props=>{

  const nona=()=>{
    console.log("item added tpo cart ")
  }
  
    return(
    <div className="card" style={{width:"18rem"}}>
   
    <img src={props.val.urls.small} className=" img-fluid-md card-img-top" alt=""/>
    <div className="container-fluid card-body">
    <p className="card-brand">Wadrobe India</p>
      <h4 className="card-text">{props.val.user.username}</h4>
     
      <p className="card-price">${props.val.height}  </p>
     
      <FontAwesomeIcon icon={faCartPlus} on onClick={nona} className="btn_hov" />
 
   

    </div>
  </div>
    )
}
export default Cards