import axios from "axios"
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import Cards from "./Cards";
const Featured=()=>{
const[images,setImages]=useState([]);
    const getImages=()=>{
        axios.get("https://api.unsplash.com/search/photos?page=2&portrait&query=indian models&client_id=CDimC0T-aDA5jEptIPLwMxPKwEDAOmLSzR4xG8i9yyY").then((response)=>{
console.log(response.data.results)
setImages(response.data.results)
        })
    }
    useEffect(()=>{
        getImages()
    },[])

    return (
    <div className="Featured-container ">

        <h1>Featured</h1>
        <div className=" card-wrapper d-flex flex-wrap justify-content-center align-items-center">
            {
                 images.slice(1, 4).map((val)=>{
                return  (
              <Cards val={val}/>
             
                     )
                })
     
            }
        </div>
        <Button className=" btn_hov ">See All</Button>
       </div>
       
    )
}
export default Featured