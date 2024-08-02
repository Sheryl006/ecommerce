import axios from "axios";
import{ useState,useEffect } from "react";

export default function Products(){

    const [products,setProducts] = useState([]);
//specifying an api
const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/");
    setProducts(response.data);
};

useEffect(() => {
    getProducts();
},[]);

    return(<>
    <h1>Products</h1>
<div className="row">
   {products? products.map((product) => {
    return(
    <>
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
   }) : null}

   </div>
    </>);
}
 
