
// import './App.css'

import BottomAppBar from "./components/BottomAppBar";
import NavBar from "./cosmetics/NavBar";
import Properties from "./components/Properties";
import Classrooms from "./components/ Classrooms";
import Conditions from "./components/Conditions";
import Forms from "./cosmetics/Forms";
import Home from "./components/Home";
import Video from "./components/Video";
import Homepage from "./cosmetics/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./cosmetics/About";
import Products from "./cosmetics/Products";
import Details from "./cosmetics/Details";


function App() {
// //passing in an array
//       const name = ["John"," Mark"]
// //passing in an object
// const laptop ={
//       name :"MacBook",
//       ram : "10GB",
//       year: "2022"
// };
// const room = {
//       lab : "Safari Lab",
//       capacity : "50",
//       computers: "30"
// }
  return(
      <>
<BrowserRouter>
<NavBar/>


 <Routes>
      <Route path="/form" element={<Forms/>}></Route>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/:id" element={<Details/>}></Route>
 </Routes>
</BrowserRouter> 
      </>);

}

export default App;

 