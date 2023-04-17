import Productitems from "./Pages/Productitems";
import Productdetails from "./Pages/Productdetails";
import Homepage from "./Components/Homepage";
import Registerpage from "./Pages/Registerpage";
import Loginpage from "./Pages/Loginpage";
import Addproduct from "./Pages/Addproduct"
import Cart from "./Pages/Cart"



import { BrowserRouter, Routes, Route, Router } from "react-router-dom"





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/Productitems" element={<Productitems />}/>
          <Route path="/Productdetails/:id" element={<Productdetails />}/>
          <Route path="/Register" element={<Registerpage />}/>
          <Route path="/Login" element={<Loginpage />}/>
          <Route path="/Addproduct" element={<Addproduct />}/>
          <Route path="/cart" element={<Cart />}/>



        </Routes>
      </BrowserRouter>
    </div>




  );
}

export default App;
