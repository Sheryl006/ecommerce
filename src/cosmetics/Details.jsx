import axios from "axios";
import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Details(){
 const [product,setProduct] = useState([]);
 const {id} = useParams();
 const getSingleProduct = async()=>{
    const {data } = await axios.get(`http://127.0.0.1:8000/${id}`);
    setProduct(data);
 };

 useEffect(() => {
    getSingleProduct();
},[]);

    return(<>
    <h1 style={{fontFamily:"-moz-initial",fontWeight:"bolder"}}>Product Details</h1>
    <hr />
    
    <div className="col col-md-4">
<div className="card">
<img src= {product.image} className="img-fluid rounded-start" alt="Brushes" width={400}/>

<div className="card-body">
  <p className="card-text">Name: {product.name}</p>
  <p className="card-text">Description: {product.description}</p> 
  <p className="card-text">Price: {product.price}</p>
<a href={"products/" + product.id}>View Details</a>
   
  </div>
</div>
</div>

    
    </>
    );
}