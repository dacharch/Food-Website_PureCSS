import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home/Home";
import { Cart } from "./components/pages/Cart/Cart";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";

function App() {
  return (
     <div className="app">
       <NavBar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
       </Routes>
     </div>
    
  );
}

export default App;
