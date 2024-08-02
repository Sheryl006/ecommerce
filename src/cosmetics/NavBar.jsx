import { Link } from "react-router-dom";
import "./Navbar.css";

//linking the react way
export default function NavBar(){
    return(
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link  className="nav-link active" aria-current="page" to="/" style={{fontWeight:"bolder",fontSize:"30px"}}>COSMETIC WISDOM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/form">Form</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/products">Products</Link></li>
            <li></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
       
      </ul>

     </div>
     {/* <div>
     <svg id="i-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
    <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
</svg>
     </div> */}
     <div className="buttons">
     <ul className="wrapper">
		<li className="icon facebook">
		  <span className="tooltip">Facebook</span>
		  <i className="fab fa-facebook-f"></i>
		</li>
		<li className="icon twitter">
		  <span className="tooltip">Twitter</span>
		  <i className ="fab fa-twitter"></i>
		</li>
		<li className="icon instagram">
		  <span className="tooltip">Instagram</span>
		  <i className="fab fa-instagram"></i>
		</li>
	  </ul>	  
  </div>

  </div>
</nav>
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{alignContent:"center"}}/>
      <button type="button" className="btn btn-outline-primary">Search</button>

    </form>
  </div>
</nav>
  
</>

    )
}


 {/* <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/form">Form</Link>
   </nav> */}


// export default function NavBar(){
// return(
//     <>
//     <a href="/">Home</a>
//     <a href="/about">About</a>
//     <a href="/form">Form</a>
//     </>
// )

// }










//Using this method,one cannot reassign the properties
// export default function NavBar(props){
//     return(
//     <>
//     <h2>My name is {props.name} and I am {props.age} years old.</h2>
    
    
//     </>);
// }


//DESTRUCTURING METHODS
//or you can use
// export default function NavBar(props){
// const {name,age} = props;
// return(
//     <>
//     <h2>My name is {name} and I am {age} years old.</h2>
//     </>
// )

// }


//or you can use
// export default function NavBar({names,age}){
   
// return(
//         <>
//         <h2>My name is {names} and I am {age} years old.</h2>
//         </>
//     )
    
//     }












